import "./Heading.css"

export default function Heading({t}){
    console.log(t)
    return(
        <div className="Heading">
            {t>=6 && t<8 && <h1>Why are you awake</h1>}
            {t>=8 && t<12 && <h1>Good morning, Leah!</h1> }
            {t>=12 && t<14 && <h1>Good afternoon, Leah!</h1>}
            {t>=14 && t<20 && <h1>Good evening, Leah!</h1>}
            {t>=20 && t<24 && <h1>Good night, Leah!</h1>}
            {t<6 && <h1>Sleep, girl!</h1>}

        </div>
        
    )
}