import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors';
import https from 'https';

const app = express();
const port = 5000;

// Middleware
app.use(json());
app.use(cors());

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

const TIMEOUT_MS = 2000; // Set timeout to 5 seconds
const MAX_REDIRECTS = 5;

app.get('', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const checkHost = async (protocol) => {
        try {
            const response = await axios.get(`${protocol}://${url}`, { timeout: TIMEOUT_MS, maxRedirects: MAX_REDIRECTS, httpsAgent: httpsAgent });
            return response.status >= 200 && response.status < 400;
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                console.error(`Timeout occurred while trying to access ${protocol}://${url}`);
            }
            return false;
        }
    };

    const isAccessible = await checkHost('http') || await checkHost('https');

    if (isAccessible) {
        return res.json(200)
    } else {
        return res.json(500)
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
