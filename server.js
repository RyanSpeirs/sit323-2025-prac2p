// SIT 323 2.1P
// Ryan Speirs 600152989

var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var bodyParser = require('body-parser')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

