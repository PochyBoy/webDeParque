import { useState } from 'react'

import './App.css'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
// datos y contexto para traducciones
import diccionario from "./diccionario";
// contexto donde guardaremos la función traduce y el idioma actual
import TraductorContext from "./TraductorContext";


function App() {

  // idioma actual, state
  const [idioma, setIdioma] = useState(0);
  // función traduce, devuelve el string correspondiente a la etiqueta e idioma facilitados
  const traduce = (etiqueta) => diccionario[etiqueta][idioma];


  return (
    <TraductorContext.Provider value={{ traduce, idioma }}>

      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link to="/Collserola" className='nav-link'>Collserola</Link> <br/>
                <Link to="/PantanoDeVilladera" className='nav-link'>Pantano De Villadera</Link>
                <Link to="/ParqueNaturalDelMontseny" className='nav-link'>ParqueNaturalDelMontseny</Link>
                <Link to="/DeltaDelLlobregat" className='nav-link'>DeltaDelLlobregat</Link>
                <Link to="/LaMontanaDeMoncerrat" className='nav-link'>LaMontañaDeMoncerrat</Link>
                <Link to="/ElPadraforca" className='nav-link'>ElPadraforca</Link>
                <Link to="/ElDeltaDelLlobregatParte2" className='nav-link'>ElDeltaDelLlobregatParte2</Link>
                <Link to="/ParcNaturalDelGarraf" className='nav-link'>ParcNaturalDelGarraf</Link>
                <Link to="/ParqueDeSantLloren" className='nav-link'>ParqueDeSantLloren</Link>
            </Nav>
          </Navbar.Collapse>
          <div className="text-end">
            <Button
              size="sm"
              variant={idioma === 0 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(0)}
            >
              ES
            </Button>{" "}
            <Button
              size="sm"
              variant={idioma === 1 ? "primary" : "outline-primary"}
              onClick={() => setIdioma(1)}
            >
              CA
            </Button>
          </div>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Outlet />
      </Container>
    </TraductorContext.Provider>

  )
}

export default App
