import "./Block.css"
export default function Block({date, name, special, blocks}){
    return(
        <div className="Block">
            {console.log(date, name, special, blocks)}
            <div>
                <h2>{name}</h2>
                <h5 style={{color:"#11009E"}}>{date}</h5>
            </div>
            
                {blocks != [] && blocks.map(block=> (<div><h3>{block.name} </h3> <p>{block.start}-{block.end}</p></div>))}
            
        </div>
    )
}