import React , {useState} from "react";
import Image from '../img/01-header/github.png'
import BurgerMenu from './BurgerMenu.js'

class HeaderMob extends React.Component {
    render() {
        return (
            <div id="header-mob">
                <div className="container" id="headerMob__container">
                    <div className="header__github"><a href="https://github.com/1urt3t"><img src={Image}/></a></div>
                    <div className="header__logo">
                        Sokol-<span>Web</span>
                    </div>
                    <BurgerMenu />
                </div>
            </div>
        )
    } 
}

export default HeaderMob