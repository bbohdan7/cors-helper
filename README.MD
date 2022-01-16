# Express.js based application for utilizing remote Backend

Something it's necessary to request remote backend API using Angular, React, Vue or other frontend frameworks or libraries. The standard library to communicate with backend is Axios. Whenever you try to GET, POST, PUT so on you'll receive an error related to CORS policies which means that remote server doesn't allow you to use its API from different host that itself. So, there are three options you could apply to resolve this issue:
    1. Modify headers on backend in order to allow your frontend address (you should have access to the source, but that's impossible).
    2. Listen your frontend on the same host on which backend listens on. (The same way, it's not possible.)
    3. Create your own backend which uses the remote one on which you can do whatever you want. (first and second steps).
## So, this app is intented to resolve the aforementioned three steps but started with the last one and implement first and second ones based on third one because we'll have our own backend.

### What I have done here:
* `npm init`
* `npm install --save express node-fetch cors`
* `touch server.js`
* You can see `corsOptions` with `origin` which is our future frontend app.
* Also I've installed `npm install --save npm-watch` for not to reload our application with everytime calling `node server.js`:
    ```
        Inside package.json create new script - **watch** where add **npm-watch**
        Declare **watch** key with associated command which builds and executes our app (`node server.js` in my case)
    ```

### Enjoy!