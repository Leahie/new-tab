import React, { useState, useEffect } from 'react';
import Block from "./Block.jsx";

export default function ScheduleOne(){
    let isCancelled = false;
    const [data, setData] = useState(null);
    let arr;
    // fetch(import.meta.env.REACT_APP_BACKEND_URL+"schedule")
    useEffect(()=>{
        isCancelled=true;
        fetch("schedule")
        .then((response)=> { return response.json();})
        .then((data)=> {console.log(data); setData(data);})
        .catch(error=> console.log(error));
    }, [])
    
    if(data!= null){
       arr = getStuff(data);
    }
    return(
        <div>
            {arr!=null && <Block date = {arr[0]} name = {arr[1]} special = {arr[2]} blocks= {arr[3]}/>}
        </div>
    )

}

function getStuff(arr){
    let date = arr['results'][0]['date'];
    let special = arr['results'][0]['day_type']['special'];
    let name = arr['results'][0]['day_type']['name'];
    let blocks = arr['results'][0]['day_type']['blocks'];
    return [date, name, special, blocks]
}