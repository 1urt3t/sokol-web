import React from "react";
import Image from '../img/02-img.png'

class Skill02 extends React.Component {
    render () {
        return (
            <div className="page03__skill">
                <div className="skill__img"><img src={Image}/></div>
                <div className="skill__circle"></div>
                <div className="skill__text">
                    <div className="skill__text__header">
                                HTML, CSS, and<br/>
                                JavaScript:
                    </div>
                    <div className="skill__text__desk">
                    Experienced in creating semantic 
                    and beautiful web 
                    pages using 
                    HTML, CSS, and JavaScript.

                    </div>
                </div>
            </div>
        )
    }
}

export default Skill02