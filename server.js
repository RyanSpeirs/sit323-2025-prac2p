//  SIT 323 2.1P
//  Ryan Speirs 600152989

//  calling all the modules we need, express and socket.io
//  giving them the variables to make it easy to invoke them
var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var bodyParser = require('body-parser')

//  Calling the html and css in the current directory, needs to be in same directory to work obviously
app.use(express.static(__dirname))

//  I contemplated putting a webform in, but its not required
//  app.use(bodyParser.json())
//  app.use(bodyParser.urlencoded({extended: false}))

// Tells us when someone connects, when it works, which isn't often
io.on('connection', (socket) => { 
    console.log('a user connected')
})

// sets the server to listen to port 3000 and notifies us that it is doing so
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})
