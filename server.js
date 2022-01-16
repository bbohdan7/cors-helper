import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const PORT = 5000
const app = express()

app.use(cors())

const corsOptions = {
    origin: "http://localhost:8080"
}

const requestEndpoint = "some_backend:port"

app.get('', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET"
    }
    console.log(`URL Params (date): ${req.query.date}`)
    
    const response = await fetch(`${requestEndpoint}&date=${req.query.date}`, fetchOptions)
    const jsonResponse = await response.json()
    res.json(jsonResponse)
})

app.get("/somepath/:param1/:param2", async (req, res) => {
    const fetchOps = {
        method: "GET"
    }

    let param1 = req.params.param1
    let param2 = req.params.param2

    const response = await fetch(`some_backend:port?param1=${currency}&param2=${param2}`, fetchOps)
    const jsonResponse = await response.json()

    res.json(jsonResponse)
})

app.listen(PORT, () => console.log(`Cors Helper App is started and listening on port ${PORT}`))