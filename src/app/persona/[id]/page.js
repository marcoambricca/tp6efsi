import Personas from "../../../modules/Personas.js";
import '../../styles/person.css';

export default function Page({ params }) {
    const persona = Personas.find(p => p.id === params.id);
    
    return (
        <div className="persona-container">
            <div className="persona-detail">
                <h1>{`${persona.nombre} ${persona.apellido}`}</h1>
                <p>Email: {persona.email}</p>
                <p>Edad: {persona.edad}</p>
            </div>
        </div>
    );
}