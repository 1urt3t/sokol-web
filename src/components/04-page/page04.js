import React from "react";
import Image from './img/01-img.png'
import Image02 from './img/02-img.png'


class Page04 extends React.Component {
    render () {
        return (
            <div id="page04">
                <div className="container" id="page04__container">
                    <div className="page04__img"><img src={Image}/></div>
                    <img src={Image02}/>
                    <div className="page04__text">
                        <div className="page04__text__header"><span>Contact</span> me</div>
                        <div className="page04__text__desk">
                        <div>If you have any exciting projects or collaboration 
                        opportunities, feel free to reach out to me via email:</div>
                        <a href="mailto:alexsandrlurt3t@gmail.com">alexsandrlurt3t@gmail.com</a>
                        <div>I look forward to receiving your messages 
                        and the possibility of working together!</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page04