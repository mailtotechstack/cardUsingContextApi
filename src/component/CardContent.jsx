import Button from "./button";
import GoldStar from "./GoldStar";
// import { useContext } from "react";
// import { themeContext } from "../context/themeContext";
export default function CardContent(){
    // const mode = useContext(themeContext);
    // console.log(mode.toggle);
    return(<div>
        <h2 className="text-xl font-bold my-5">Apple Watch Series 7 GPS, Aluminium Case, Straight Sport</h2>
        <div className="flex items-center gap-5 flex-wrap">
            <span className="flex gap-1 flex-wrap">
                <GoldStar size={25} />
                <GoldStar size={25} />
                <GoldStar size={25} />
                <GoldStar size={25} />
                <GoldStar size={25} />

            </span>
            <span className="bg-blue-100 px-3 text-blue-700 font-semibold rounded-md">5.0</span>
        </div>
        <div className='my-5 flex-wrap flex justify-between items-center'>
            <span className="text-3xl font-bold">$599</span>
            <Button />
        </div>
    </div>)
}