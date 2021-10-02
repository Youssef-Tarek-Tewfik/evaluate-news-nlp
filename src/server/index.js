const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const https = require('https');

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

app.get('/meaningCloud', function (request, response) {

    const data = JSON.stringify({
        key: process.env.API_KEY,
        lang: 'auto',
        txt: 'According to all known laws of aviation there is no way a bee should be able to fly',
    })

    const options = {
        hostname: 'api.meaningcloud.com',
        path: '/sentiment-2.1',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Content-Length': data.length,
        },
    }

    const req = https.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
        res.on('data', d => {
            process.stdout.write(d);
            // console.log(JSON.parse());
            // response.send(d);
        })
    })

    req.on('error', error => {
    console.error(error)
    })

    req.write(data)
    req.end()

})
