import { NavLink } from "react-router-dom";

import joystick from "../../../assets/joystick.svg";
import instagram from "../../../assets/img/card-img/instagram.png";
import twitter from "../../../assets/img/card-img/twitter.png";
import facebook from "../../../assets/img/card-img/facebook.png";

const Footer = () => {
  return (
    <footer className="footer">
      <figure>
        <img src={joystick} alt="logo" />
      </figure>
      <menu className="menu-footer">
        <li className="list">
          <NavLink to={"/"} className="links">
            Home
          </NavLink>
        </li>
        <li className="list">
          <NavLink to={"/games"} className="links">
            Games
          </NavLink>
        </li>
        <li className="list">
          <NavLink to={"/contact"} className="links">
            Contact
          </NavLink>
        </li>
      </menu>
      <figure className="logos">
        <img src={instagram} alt="Instagram"/>
        <img src={twitter} alt="Twitter" />
        <img src={facebook} alt="Facebook" />
      </figure>
    </footer>
  );
};
export default Footer;
