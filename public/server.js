const express = require("express");
const app = express()
const http = require("http").createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listen on por", ${PORT}`)
})

app.get('/', (req, res) => {
    // res.send("Hello World")
    // the send data will be shown on the UI
    //  now if we want to send any other file then we can also do so :

    res.send(__dirname+'/index.html')

})

//  for static files :

app.use(express.static(__dirname+"/public"))


// Socket

const io = require("socket.io")(http)

io.on("connection",(socket)=>{
    console.log("connected ....")
})