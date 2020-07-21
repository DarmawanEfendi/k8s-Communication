const express = require('express')
const axios = require('axios');
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello From service 2'))
app.get('/svc1', async (req, res) => {
    try
    {
        const response = await axios.get(process.env.URL);
        return res.send(response.data);
    } catch (e) {
        console.log('error: ', e);
        return res.send('error connect to svc1: '+process.env.URL+'\n');
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))