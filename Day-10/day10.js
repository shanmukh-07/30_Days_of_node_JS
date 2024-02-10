const exp = require('constants')
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))

function staticFileServer(req, res) {
    res.sendFile(path.resolve('index.html'))
}

app.get('/',staticFileServer)

app.listen(7777, () => {
    console.log(`server is running on port 7777`)
})