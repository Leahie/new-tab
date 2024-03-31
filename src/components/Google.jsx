import "./Google.css"
export default function Google(){
    return(
        <div className="Google">
            <form action="https://www.google.com/search" method="get">
                <input type="text" name = "q" id="search-query" placeholder="What do you want to discover today? " autoComplete="off" />
            </form>
            
        </div>
    )
}
