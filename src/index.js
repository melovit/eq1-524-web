import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ReactDOM from "react-dom";

import "./index.css";
import Router from "./Router";

import BloodSvg from "./assets/blood.svg";

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid bg-light vh-100 d-flex flex-column">
      <Navbar className="flex-shrink-0" bg="light" expand={"lg"}>
        <Navbar.Toggle aria-controls="menu-nav" />
        <Navbar.Brand href="/">
          <div className="logo-box">
            <img className="logo" src={BloodSvg} alt="blood drop" />
            <h1 className="page-title">DOE SANGUE</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse id="menu-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/mais">Mais</Nav.Link>
            <Nav.Link href="/tiposanguineo">Tipo Sanguíneo</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
