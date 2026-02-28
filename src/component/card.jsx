import Image from "./image"
import CardContent from "./CardContent"
import { useContext } from "react"
import { themeContext } from "../context/themeContext"
function Card() {
  const mode = useContext(themeContext);
  return (
    <div className={` p-5 max-w-lg  ${mode.toggle === 'dark' ? "bg-black text-white" : "bg-white text-black"}`}>
      <Image></Image>
      <CardContent></CardContent>
    </div>
  )
}

export default Card
