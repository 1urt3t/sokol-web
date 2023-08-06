import React from "react";
import Image from '../img/04-img.png'

class Skill04 extends React.Component {
    render () {
        return (
            <div className="page03__skill">
                <div className="skill__img"><img src={Image}/></div>
                <div className="skill__circle"></div>
                <div className="skill__text">
                    <div className="skill__text__header">Algorithms and Data <br/>
                                Structures:</div>
                    <div className="skill__text__desk">
                    Solved over 150 problems 
                    on LeetCode and  I have 3 kata on 
                    CodeWars, enhancing my 
                    programming skills 
                    and successfully tackling 
                    complex 
                    algorithmic challenges
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill04