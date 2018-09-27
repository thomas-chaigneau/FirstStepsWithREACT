import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

//import Travel from "./Travel";
import Travels from "./Travels"

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="http://petitemimine.p.e.pic.centerblog.net/45fa3546.gif" alt="logo" />
          <h1>COUCOU</h1>
        </header>

        <Travels
        //   destination= "Tokyo"
        //   country="Japan"
        //   distance="553"
        //   image= "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Tokyo_Tower_and_around_Skyscrapers.jpg/220px-Tokyo_Tower_and_around_Skyscrapers.jpg"
        // />
        // <Travel
        //   destination="Paris"
        //   country="France"
        //   distance="8902"
        //   image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/800px-Paris_-_Eiffelturm_und_Marsfeld2.jpg"
        />
      </div>
    );
  }
}

export default App;