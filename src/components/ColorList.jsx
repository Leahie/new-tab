export default function ColorList({colors}){
    return (
        <div>
            <p>ColorList</p>
            <ul>{colors.map((color) => <li style={{color:color}}>{color}</li>)}</ul>
            
        </div>
    )
}