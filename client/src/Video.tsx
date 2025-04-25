import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'

import Input from "./input";
import { useState } from "react";
import ReactPlayer from "react-player";
export default function Video() {
  const [video, setvideo] = useState(false);

  const handleList = (video: string) => {
    setvideo(video);
  };

  if(!setvideo){
    return (<Cardio
      size="50"
      stroke="4"
      speed="2"
      color="black" 
    />)
  }
  return (
    <div>
      <Input onLinkSubmit={handleList} />
      {video &&
      <div className="absolute top-1/2 left-1/2 rounded-b-xl m-20 transform -translate-x-1/2 -translate-y-1/2">
        <ReactPlayer
        onReady={()=>setvideo(false)}
          url={video}
          controls={true}
        />
      </div>
          }
    </div>
  );
}
