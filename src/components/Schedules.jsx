import React, { useState, useEffect } from 'react';
import ScheduleOne from "./ScheduleOne.jsx";
import ScheduleMult from "./ScheduleMult.jsx";
import "./Schedules.css"

const options = { weekday: 'long' };

export default function Schedules(){
    setInterval(updateTime, 1000);
    const today = new Date().toLocaleDateString('en-US', options);

    const [toggle, setToggle] = useState(false);
    const [day, setDay] = useState(today)

    function updateTime(){
        const newDay = new Date().toLocaleDateString('en-US', options);
        setDay(newDay)
    }

    function change(e){
        e.preventDefault();
        setToggle(!toggle);
    };
    console.log(day)

    return(
        <div className='Schedules'>
            {!toggle && (day!="Sunday" && day!="Saturday") && <ScheduleOne/>}
            {toggle && <ScheduleMult />}
            {!toggle && <button onClick={change}>Toggle All</button>}
            {toggle && <button onClick={change}>Toggle Today</button>}
        </div>
    )           
    

}