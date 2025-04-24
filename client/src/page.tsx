import { nanoid } from "nanoid";
import { NavLink } from "react-router";

export default function Page(){
  let nanoidValue: string=nanoid()
  return (
    <NavLink to={"/nanoidValue"}>
      Random Id: {nanoid()}
    </NavLink>
  )
}