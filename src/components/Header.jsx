import "../scss/Header.scss";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <label className="hamburger">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </nav>
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
