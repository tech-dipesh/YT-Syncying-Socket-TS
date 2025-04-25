import { nanoid } from "nanoid";
import Video from "./Video";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Page(){
  const navigate=useNavigate()
  const {roomId}=useParams()
  const [currentroom, setcurrentroom] = useState(roomId || nanoid())
  const newRoom=()=>{
    // nanoid()
    const newRoomId=nanoid();
    setcurrentroom(newRoomId)
    navigate(`/${newRoomId}`)
  };
  

  return (
  <main>
    <h2>Noone will watch you, you can invite your any friends for the watch together any youtube video.</h2>
    <hr/>
    <h1>Your Room id is: {currentroom}</h1>
    <button onClick={newRoom}>Generate a new room</button>
    <Video/>
  </main>
  )
}