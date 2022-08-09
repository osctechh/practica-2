import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import Inscripciones from "./pages/Inscripciones";
import Clases from "./pages/Clases";
import {React, useState} from 'react';

function App() {
 
  return (
    <Router>
    <div>
      <div>
      <Navbar/>
      </div>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Inscripciones" element={<Inscripciones/>}/>
      <Route path="/Contacto" element={<Contacto/>} />
      <Route path="/Clases" element={<Clases />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
