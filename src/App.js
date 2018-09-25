import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="http://petitemimine.p.e.pic.centerblog.net/45fa3546.gif" alt="logo" />
          <h1>COUCOU</h1>
        </header>
        <Travel
          destination= "Tokyo"
          country="Japan"
          distance="553"
          image= "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tokyo_Tower_and_around_Skyscrapers.jpg/220px-Tokyo_Tower_and_around_Skyscrapers.jpg"
        />
        <Travel
          destination="Pris"
          country="France"
          distance="8902"
          image="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiA1avswdbdAhXrAMAKHS-sDw4QjRx6BAgBEAU&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FParis&psig=AOvVaw1_c84w5R4Qpxd1dH-N8nau&ust=1537977245112951"
        />
      </div>
    );
  }
}

export default App;