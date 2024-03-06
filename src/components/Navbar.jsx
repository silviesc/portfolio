import { useState } from "react";
import '../scss/navbar.scss';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="navbar">
        <button className={`burgerbtn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        {isOpen && (
            <div className="navbar__overlay" onClick={toggleMenu}>
                <ul className="navbar__menu">
                    <li><a href="" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="" onClick={toggleMenu}>About me</a></li>
                    <li><a href="" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar;
