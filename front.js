var express = require('express')
var app = express()
var port = 80

const axios = require('axios')

app.listen(port, (err) => {
    if (err) console.log(err)
    console.log(`I here on ${port}`)
})

app.get('/', (req, res) => {
    axios.get('http://localhost:3000/api')
        .then((response) => {
            console.log(response)
            res.send({
                servidor: 'front',
                ...response.data
            })
        })
        .catch((error) => {
            // handle error
            console.log(error);
            res.sendStatus(500)
          })
})