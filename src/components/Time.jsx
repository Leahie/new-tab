import "./Time.css"
export default function Time({time, day}){
    return(
        <div className="Time">
            <p>The time is currently <span style={{color:"#11009E"}}>{time}</span> on {day}</p>
        </div>
    )
}