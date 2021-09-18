import React from "react";
import NavBar from "./components/Navbar/NavBar";
import {action, horror, originals} from "./urls"
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netfilx Originals"/>
      <RowPost url={action} title="Action " isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>
  
    </div>
  );
}

export default App;
