const express = require('express')
const {v1Router, v2Router} = require('./routes');
const app = express()
const port = 3000

app.use('/v1', v1Router);
app.use('/v2', v2Router);

app.listen(port, () => console.log(`Service listening at http://localhost:${port}`))