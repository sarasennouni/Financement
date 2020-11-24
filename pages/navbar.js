import Nav from "react-bootstrap/Nav";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function navbar () {
    return (
        <Navbar collapseOnSelect expand='md' variant='light' bg='light'>
            <div className="container">
            <Navbar.Brand href="#home">Financement</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav>
                    <Nav.Link href="/">Page d'accueil</Nav.Link>
                    <Nav.Link href="/contactUs">Contactez-Nous</Nav.Link>
                    <Nav.Link href="/login">Se connecter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
}