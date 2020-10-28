const express = require('express')
const axios = require('axios')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const path = process.env.CONFIG_PATH || '.';
    const fileName = process.env.CONFIG_FILE_NAME || 'config.json';
    const fullPath = `${path}/${fileName}`;
    var obj = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    return res.json(obj.data);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))