const express = require('express');
const http = require('http');
const WebSocket = require('wb');
const app = express()
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection',function connection(ws){
    console.log("A New Client Connected");
    ws.on('message',function incoming(message){
        console.log("Received: %s",message)
        ws.send(message);
    })
})

app.get("/websocket",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

server.listen(7777,()=>{
    console.log("Server is running on the Port 7777")
})