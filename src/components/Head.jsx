import Google from "./Google.jsx";
import Heading from "./Heads.jsx";
import Time from "./Time.jsx";
import React, {useState} from "react";

import "./Header.css"
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export default function  Header({person = "Leah"}){
    setInterval(updateTime, 1000);
    const now = new Date().toLocaleTimeString();
    const today = new Date().toLocaleDateString('en-US', options);

    const [time, setTime] = useState(now);
    const [day, setDay] = useState(today)

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        const newDay = new Date().toLocaleDateString('en-US', options);
        setTime(newTime);
        setDay(newDay)
    }
    
    const text = time.split(":");
    const mood = text[2].split(" ");
    let t = parseInt(text[0]);
    mood[1] == "PM" ? t = 12+t : t;

    return(
        <div className="Header">
            <Heading className="Heading" t={t} />
            <Time  time={time} day={day}/>

            <Google className="Google"/>
        </div>
    )
}