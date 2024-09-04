import Link from 'next/link';
import Personas from '../modules/Personas.js'; // Adjust the path as needed
import './styles/home.css'; // Adjust the path as needed

export default function Home() {
    return (
        <div className="home">
            <h1>Lista de personas</h1>
            <div className="personas-list">
                {Personas.map(persona => (
                    <Link key={persona.id} href={`/persona/${persona.id}`} passHref>
                        <div className="persona">
                            <h2>{`${persona.nombre} ${persona.apellido}`}</h2>
                            <p>Email: {persona.email}</p>
                            <p>Edad: {persona.edad}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
