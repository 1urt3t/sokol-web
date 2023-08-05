import React from "react";
import Image from '../img/01-header/github.png'
import { Link } from 'react-scroll'


class Header extends React.Component {
    
    render() {
        return (
            <div id="header">
                <div className="container" id="header__container">
                    <div className="header__logo">
                        Sokol-<span>Web</span>
                    </div>
                    <div className="header__links">
                        <div className="header__link"><Link  to="page02" smooth={true} duration={500}>ABOUT ME </Link></div>
                        <div className="header__link"><Link  to="page03" smooth={true} duration={500}>MY SKILLS</Link></div>
                        <div className="header__link"><Link  to="page04" smooth={true} duration={500}>CONTACT ME</Link></div>
                    </div>
                    <div className="header__github"><a href="https://github.com/1urt3t"><img src={Image}/></a></div>
                </div>
            </div>
        )
    } 
}

export default Header