import Link from 'next/link';
import '../app/styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link href="/">Home</Link>
                </li>
                <li className='nav-item'>
                    <Link href="/contact">Contacto</Link>
                </li>
                <li className='nav-item'>
                    <Link href="/stats">Estadisticas</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
