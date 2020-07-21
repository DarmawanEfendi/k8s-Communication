const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello From service 1\n'))
app.get('/svc2', async (req, res) => {
    try
    {
        const response = await axios.get(process.env.URL);
        return res.send(response.data);
    } catch (e) {
        console.log('error: ', e);
        return res.send('error connect to svc2: '+process.env.URL+'\n');
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))