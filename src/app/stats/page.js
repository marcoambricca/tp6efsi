import Personas from '../../modules/Personas.js';
import '../styles/stats.css';

export default function Stats() {
    function mayoresA35() {
        return Personas.filter(persona => parseInt(persona.edad, 10) > 35).length;
    }

    function personasMayores() {
        const oldestAge = Math.max(...Personas.map(persona => parseInt(persona.edad, 10)));
        const oldestPersons = Personas.filter(persona => parseInt(persona.edad, 10) === oldestAge);
        return oldestPersons.map(persona => `${persona.nombre} ${persona.apellido}`);
    }

    function personasMenores() {
        const youngestAge = Math.min(...Personas.map(persona => parseInt(persona.edad, 10)));
        const youngestPersons = Personas.filter(persona => parseInt(persona.edad, 10) === youngestAge);
        return youngestPersons.map(persona => `${persona.nombre} ${persona.apellido}`);
    }

    return (
        <div className="stats-container">
            <h1>Estadísticas</h1>
            <h2>Personas mayores a 35: {mayoresA35()}</h2>
            <div>
                <h2>Personas más adultas:</h2>
                <ul>
                    {personasMayores().map((persona, index) => (
                        <li key={index}>{persona}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Personas más jóvenes:</h2>
                <ul>
                    {personasMenores().map((persona, index) => (
                        <li key={index}>{persona}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
