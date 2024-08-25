import joystick from '../../assets/joystick.svg';
import CartWidget from '../CartWidget';
const Navbar = () => {
    return(
        <header className="header">
            <nav className="navBar container">
                <div className='title'>
                <figure className="logo">
                    <img src={joystick} alt="" />
                </figure>
                <h1>GameAddict</h1>
                </div>
                <menu className="menu">
                    <li className="list">
                        <a href="" className='links'>Inicio</a>
                        </li>
                    <li className="list">
                        <a href="" className='links'>Tienda</a>
                        </li>
                    <li className="list">
                        <a href="" className='links'>Contacto</a>
                        </li>
                    <li className="list">
                        <a href="" className=''>
                            <CartWidget/>
                        </a>
                        </li>
                </menu>
            </nav>
        </header>
    );
}

export default Navbar;