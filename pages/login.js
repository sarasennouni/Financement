import React, {useState} from "react";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Connecter from "./connecter";
import Signup from "./signUp";
import Form from "react-bootstrap/Form";
export default function login () {
    const [key, setKey] = useState('connecter');
    return (
        <div>
            <Navbar/>
            <div className="container">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={key}
                      onSelect={(k) => setKey(k)}>
                    <Tab eventKey="connecter" title="Connecter">
                        <Connecter/>
                    </Tab>
                    <Tab eventKey="invitation" title="Connect par invitation">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Code de Validation</Form.Label>
                            <Form.Control type="text" placeholder="Code de validation" />
                            <Form.Text className="text-muted">
                                Ce code va expérie dans 24h suivante.
                            </Form.Text>
                        </Form.Group>
                    </Tab>
                    <Tab eventKey="register" title="Register" >
                        <Signup/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}


