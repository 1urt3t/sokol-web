import React from "react";
import Image from '../img/03-img.png'

class Skill03 extends React.Component {
    render () {
        return (
            <div className="page03__skill">
                <div className="skill__img"><img src={Image}/></div>
                <div className="skill__circle"></div>
                <div className="skill__text">
                    <div className="skill__text__header">React:</div>
                    <div className="skill__text__desk">
                    React framework is a powerful 
                    tool for developing dynamic 
                    user interfaces. It allows creating 
                    modern and responsive web 
                    applications, simplifying the 
                    development process and updating 
                    data on the page efficiently.
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill03