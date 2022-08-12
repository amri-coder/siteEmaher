import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';


import Navbar from "./Components/Navbar/NavBar.js";
import Index from "./Components/Index/index.js";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path ='/' component={Index} />
      
     
    </BrowserRouter>
  );
}

export default App;
