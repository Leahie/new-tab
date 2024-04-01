import React, { useState, useEffect } from 'react';
import Block from "./Block.jsx";

export default function ScheduleMult(){
    const [data, setData] = useState(null);
    let fin = [];

    useEffect(()=>{
        fetch("https://ion.tjhsst.edu/api/schedule?page_size=7")
        .then((response)=> { return response.json();})
        .then((data)=> { setData(data);})
        .catch(error=> console.log(error));
    }, [])

    
    if(data!= null){
        let arr = data['results'];
        
        for(let i = 0; i<arr.length; i++){
            fin.push(getStuff(arr[i])) 
        }
        console.log("fin", fin);
     }

    return(
        <div>
            {fin!=[] && fin.map(arr=><Block date = {arr.date} name = {arr.name} special = {arr.special} blocks = {arr.blocks}/>)}
        </div>
    )

}

function getStuff(arr){
    let date = arr['date'];
    let special = arr['day_type']['special'];
    let name = arr['day_type']['name'];
    let blocks = arr['day_type']['blocks'];
    return {date, name, special, blocks}
}