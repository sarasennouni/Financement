import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Form,Button, FormControl} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Synphony</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar collapseOnSelect expand='md' variant='light' bg='light'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav>
                    <Nav.Link href="#home">Page d'accueil</Nav.Link>
                    <Nav.Link href="#financement">Mes Financements</Nav.Link>
                    <Nav.Link href="#documentaire">Réference Documantaire</Nav.Link>
                    <Nav.Link href="#livrable">Mes Livrables</Nav.Link>
                    <Nav.Link href="#features">Contactez-Nous</Nav.Link>
                    <Nav.Link href="#pricing">Se connecter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}