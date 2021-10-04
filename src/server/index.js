const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const https = require('https');
const axios = require('axios').default;

dotenv.config();

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`Example app listening on port 8081!`)
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/meaningCloud', async function (request, response) {

    console.log(request.query);

    const API_KEY = process.env.API_KEY;
    const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";

    const apiResponse = await axios.get(`${BASE_API_URL}?key=${API_KEY}&url=${request.query.q}&lang=en`);
    response.send(apiResponse.data);

})
