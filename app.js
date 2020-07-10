var express = require('express')
var app = express()

app.listen(3000, (err) => {
    if(err) console.log(err)
    console.log('API ON 3000')
})

app.get('/api', (req, res) => {
    res.send({
        math: Math.random()
    })
})