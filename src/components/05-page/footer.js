import React from "react";
import Image from '../img/01-header/github.png'
import Image02 from './img/01-img.png'
import { Link } from "react-scroll";

class Footer extends React.Component {
    render () {
        return (
            <div id="footer">
                <div className="container" id="footer__container">
                    <div className="header__logo">Sokol-<span>Web</span></div>
                    <div className="footer__right">
                        <div className="Upward"><Link to="header" smooth={true} duration={500}>Upward<img src={Image02}/></Link></div>
                        <div className="footer_git"><a href="https://github.com/1urt3t"><img src={Image}/></a></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer