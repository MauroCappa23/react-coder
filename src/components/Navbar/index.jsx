import { NavLink } from 'react-router-dom';

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
                        <NavLink to={`/`} className='links'>Home</NavLink>
                        </li>
                    <li className="list">
                        <NavLink to={`/games`} className='links'>Games</NavLink>
                        </li>
                    <li className="list">
                        <NavLink to={`/contact`} className='links'>Contact</NavLink>
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