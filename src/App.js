import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';

import AppMain from './AppMain/AppMain.react';

class App extends Component {

  footerInfo ={
    designer:"Ramesh",
    copyRight:"2019-2022"
  }
  render() {
    return (
      <div className="App">
        
          <Header majorHeading={"Radio Taxi"}/>
         <AppMain/>
        <footer>
         <Footer info={this.footerInfo}></Footer>
        </footer>
      </div>
    );
  }
}

export default App;
