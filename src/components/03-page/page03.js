import React from "react";
import Skill01 from "./components/01-skill";
import Skill02 from "./components/02-skill";
import Skill03 from "./components/03-skill";
import Skill04 from "./components/04-skill";


class Page03 extends React.Component {
    render () {
        return (
            <div id="page03">
                <div className="container" id="page03__container">
                    <div className="skills__row1">
                        <Skill01 />
                        <Skill02 />
                    </div>
                    <div className="skills__row2">
                        <Skill03 />
                        <Skill04 />
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Page03