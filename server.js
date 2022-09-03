const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile('<h1>Hello world</h1>');
})

io.on('connection', function (socket) {
    console.log('a user connected');
})

http.listen(3000, function () {
    console.log('Server is running on port 3000');
})
/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/