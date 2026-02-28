import { useContext } from "react"
import dark from "../assets/dark.svg"
import light from "../assets/light.svg"
import { themeContext } from "../context/themeContext"
export default function Toggler(){
    const mode = useContext(themeContext);
    function handleClick(){
        mode.toggle === "dark" ? mode.setToggle("light") : mode.setToggle("dark");
    }
    return(<div className="flex gap-2 items-center">
        <div className={`rounded-full h-7 w-14 bg-blue-600 flex shadow-md shadow-black ${mode.toggle === 'dark' ? "justify-end": "justify-start"} items-center p-1 m-2`}>
            <div onClick={handleClick} className={`bg-white h-5 w-5 rounded-full `}>
                <img className="" src={mode.toggle === 'dark' ? light : dark} alt="logo" />
            </div>
        </div>
        <p className="font-bold">Toggle Theme</p>
    </div>)
}