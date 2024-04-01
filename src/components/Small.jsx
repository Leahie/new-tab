import "./Small.css"
export default function Small({name, link}){
    return(
        <>
            <a className="Small" href={link}>{name}</a>
        </>
    )
}