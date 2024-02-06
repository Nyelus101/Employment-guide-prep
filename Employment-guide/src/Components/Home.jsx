import React from "react";
import { Link } from "react-router-dom"
import './index.css';

export default function Home() {
    return (
        <div className="home-container">
          <div className="mainhome">
            <h1>Heloo</h1>
          </div>
          <img src="" className="img-fluid" alt="background image" />
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>
    )
};




/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Home() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SECP logo</Navbar.Brand>
          <Nav className="left">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div>
        <h5>Hello</h5>
      </div>
      <Image src="../VanLife-clone/assets/home-hero.png" fluid />
    </>
  );
}

export default Home*/