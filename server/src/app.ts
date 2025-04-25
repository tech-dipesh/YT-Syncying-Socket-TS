import express from "express"
import cors from "cors"
import httpServer from "http"
import Server from "socket.io"

const app=express()
const createserver =httpServer.createServer(app)
const path=9000;
const io=Server (createserver, {cors : {origin: "http://localhost:5173", Credential: true}})

io.on("connection", (socket)=>{
  console.log("Successfully connected and your assigned task is", socket.id);
  socket.on("video", "video started")

  io.emit("chat", {videoLink, pauseStatus, lengthStatus, volumeStatus, chats});
  
  
  
  socket.emit("newUser", socket)
})
createserver.listen(path, ()=>{
  console.log("server is starting with the correct way.");
})