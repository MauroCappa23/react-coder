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
          <a href="#" className="links">
            Home
          </a>
        </li>
        <li className="list">
          <a href="" className="links">
            Games
          </a>
        </li>
        <li className="list">
          <a href="" className="links">
            Contact
          </a>
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
