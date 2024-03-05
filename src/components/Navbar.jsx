import { useState } from "react";
import '../scss/navbar.scss';
import BurgerBtn from "./BurgerBtn";
import trueno from '../images/trueno.ico';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleClick = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="navbar">
        <a href="#"><img src={trueno} alt="logo" className="navbar__logo"/></a>
        <div className={`navbar__links ${isOpen ? 'navbar__links--active' : ''}`}>
            <a href="#" className="navbar__item" onClick={toggleClick}>Projects</a>
            <a href="#" className="navbar__item" onClick={toggleClick}>About me</a>
            <a href="#" className="navbar__item" onClick={toggleClick}>Let's talk</a>
        </div>
        <div className="navbar__burger">
            <BurgerBtn isOpen={isOpen} toggleClick={toggleClick}/>
        </div>
      
    </div>
  )
}

export default Navbar