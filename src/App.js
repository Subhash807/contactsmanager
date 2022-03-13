import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Contacts from "./contacts";
import React from "react";

function App() {
  
  return (
    <div className="app">
    
     <Routes>
          <Route exact path="signup"element={<SignUp />} />
            
          
          <Route exact path="contacts"element={<Contacts/>} />
            
          
          <Route exact path="/" element={<SignIn />} />
            
          
        </Routes>
     
    </div>
  );
}

export default App;
