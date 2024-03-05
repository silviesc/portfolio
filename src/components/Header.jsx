import "../scss/header.scss";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import Nav from "./Nav";


const Header = () => {
  return (
    <div className="header">
     <Nav />
     <ul className="header__social">
        <li>
          <a href="#">
            <img
              src={linkedin}
              alt="linkedin logo"
              className="header__social--logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={github}
              alt="github logo"
              className="header__social--logo"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src={email}
              alt="email logo"
              className="header__social--logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
