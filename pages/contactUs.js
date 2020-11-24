import React from "react";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default function ContactUs () {
    return (
        <div>
            <Navbar/>

            <div className='container'>
                <h2>Contact Us</h2>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" placeholder="Topic" />
                    </Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="name@smartsymphony.com" />
                        </Col>
                        <Col>
                            <Form.Label>Télephone</Form.Label>
                            <Form.Control placeholder="+212611223344" />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Ville</Form.Label>
                            <Form.Control type="email" placeholder="Casablanca" />
                        </Col>
                        <Col>
                            <Form.Label>Code Postal</Form.Label>
                            <Form.Control placeholder="20000" />
                        </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Comment vous entendez de nous ?</Form.Label>
                        <Form.Control as="select">
                            <option>Web</option>
                            <option>Réseau Sociaux</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
            </div>
        </div>
    );
}