import express from "express"
import cors from "cors"
import httpServer from "http"
import Server from "socket.io"

const app=express()
const createserver =httpServer.createServer(app)
const path=9000;
const io=new Server(createserver, {cors : {origin: "http://localhost:5173", Credential: true}})

io.on("connection", (socket)=>{
  console.log("Successfully connected and your assigned task is", socket.id);
  socket.on("video", )
  console.log("Your socket id is", socket.id);
  io.emit("chat", {videoLink, pauseStatus, lengthStatus, volumeStatus, chats});


  socket.join("roomId")

  socket.on("message", ({room, video})=>{ 
    console.log(room, video);
    io.to(room).emit("recieve-video", video)
  })
  
  socket.emit("Welcome to the server.")
  socket.broadcast.emit("New user joined the chat.")
  socket.emit("newUser", socket)
})
createserver.listen(path, ()=>{
  console.log("server is starting with the correct way.");
})