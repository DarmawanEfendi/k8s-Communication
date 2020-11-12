const express = require('express')
const routers = require('./routes');
const app = express()
const port = 3000

app.use('/', routers);

app.listen(port, () => console.log(`Service 1 listening at http://localhost:${port}`))