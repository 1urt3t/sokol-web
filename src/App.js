import React from "react";
import { Element } from "react-scroll";
import Header from "./components/01-header/Header";
import Page02 from "./components/02-page/page02";
import Page03 from "./components/03-page/page03";
import Page04 from "./components/04-page/page04";
import Footer from "./components/05-page/footer";

class App extends React.Component {
  render() {
    return ( 
      <div className="wrapper">
        <div className="content">
          <div className="App">
        <Element name="header"><Header /></Element>
        <Element name='page02'><Page02 /></Element>
        <Element name='page03'><Page03 /></Element>
        <Element name='page04'><Page04 /></Element>
        <Footer />
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;