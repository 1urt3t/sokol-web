import React , {useState} from "react";
import { Link } from 'react-scroll'
const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="burgerMenu">
                        <button className="burger-menu-btn" onClick={toggleMenu}>
                            <div className={isOpen ? 'burger-menu-line  open' : 'burger-menu-line'}></div>
                            <div className={isOpen ? 'burger-menu-line  open' : 'burger-menu-line'}></div>
                            <div className={isOpen ? 'burger-menu-line  open' : 'burger-menu-line'}></div>
                        </button>
                        {isOpen && <div className="menu-items">
                        <div className="header__link"><Link  to="page02" smooth={true} duration={500}>ABOUT ME </Link></div>
                        <div className="header__link"><Link  to="page03" smooth={true} duration={500}>MY SKILLS</Link></div>
                        <div className="header__link"><Link  to="page04" smooth={true} duration={500}>CONTACT ME</Link></div>
                        </div>}
                    </div>
    )
}
export default BurgerMenu