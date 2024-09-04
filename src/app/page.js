import Personas from "../modules/Personas.js";
import "./styles/home.css";

export default function Home(){
    return(
        <div className="home">
            <h1>Lista de personas</h1>
            <div className="personas-list">
                {Personas.map(persona => (
                <div key={persona.id} className="persona">
                    <h2>{`${persona.nombre} ${persona.apellido}`}</h2>
                    <p>Email: {persona.email}</p>
                    <p>Edad: {persona.edad}</p>
                </div>
                ))}
            </div>
        </div>
    )
}