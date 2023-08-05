import React from "react";
import Image from '../img/02-page/img.png'

class Page02 extends React.Component {
    render () {
        return (
            <div id="page02">
                <div className="container" id="page02__container">
                    <div className="page02__text">
                        <div className="page02__text__animation">
                        <main className="container__animation">
                           <p className="page02__text__animation__p">Hello 👋 I'm</p>
                           <section className="animation">
                               <div className="first">
                               <div>Alexsandr Sokolov</div>
                               </div>
                               <div className="second">
                               <div>Web Developer</div>
                               </div>
                           </section>
                           </main>
                        </div>
                        <div className="page02__text__desk">
                        Welcome to my portfolio website! I enjoy crafting modern 
                        and interactive web applications, aiming to bring creative ideas 
                        to each project.
                        </div>
                    </div>
                    <div className="page02__img"><img src={Image}/></div>
                </div>
            </div>
        )
    }
}

export default Page02