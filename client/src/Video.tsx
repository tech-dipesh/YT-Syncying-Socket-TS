import Input from "./input"
import { useState } from "react"
import ReactPlayer from "react-player"
export default function Video(){
  const [video, setvideo] = useState('')

  const handleList=(video: string)=>{
    setvideo(video)
  }
  return (
    <div>
      <Input onLinkSubmit={handleList}/>
      {video &&
      <ReactPlayer url={video}
        controls={true}
      />
      }
    </div>
  )
}