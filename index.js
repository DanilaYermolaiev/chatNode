const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.get('/', (req, res)=> {
  res.sendFile(`${__dirname}/index.html`)
})


io.on('connection', (socket)=>{
  connections.push(socket)
  socket.on('chat message',(msg)=>{
    io.emit('chat message', msg)
  })
})



const port = process.env.PORT || 3000

http.listen(port, ()=>{
  console.log(`listening on: ${port}`)
})
