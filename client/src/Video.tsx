import videoPlayer from "react-player"
import Input {getLink} from "./input"

export default function Video(){
  return (
    <>
    <videoPlayer url={getLink}/>
    </>
  )
}