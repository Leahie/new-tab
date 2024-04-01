import "./Personal.css"
import Small from "./Small";
import Interests from "../data/Interests.json";
import Person from "../data/Personal.json";
import School from "../data/School.json";

export default function Personal(){
    return(
        <div className="Personal">
            <h2>Quick Links</h2>

            <br />
            <h3>Personal</h3>
            <div>
                {Person.map( (obj) => (<Small name={obj.name} link = {obj.link} />) )}
            </div>
            
            <h3>Interests</h3>
            <div>
                {Interests.map( (obj) => (<Small name={obj.name} link = {obj.link} />) )}
            </div>
            <h3>School</h3>
            <div>
                {School.map( (obj) => (<Small name={obj.name} link = {obj.link} />) )}
            </div>
        </div>
    )
}