import { useState } from "react"
import { themeContext } from "./context/themeContext";
import Card from "./component/card"
import Toggler from "./component/Toggler"

export default function App(){
  const [toggle, setToggle] = useState("dark");
  return(<themeContext.Provider value={{toggle, setToggle}}>
      <div className={`h-screen flex flex-col justify-center items-center ${toggle === "dark" ? "bg-black text-white": "bg-white text-black"}`}>
        <Toggler />
        <Card />
      </div>
    </themeContext.Provider>)
}