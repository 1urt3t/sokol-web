import React from "react";
import Image from '../img/01-img.png'

class Skill01 extends React.Component {
    render () {
        return (
            <div className="page03__skill">
                <div className="skill__img"><img src={Image}/></div>
                <div className="skill__circle"></div>
                <div className="skill__text">
                    <div className="skill__text__header">Domain and Hosting</div>
                    <div className="skill__text__desk">
                        Capable of registering domains 
                        and efficiently publishing 
                        websites 
                        on hosting platforms, ensuring 
                        their availability on the Internet.
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill01