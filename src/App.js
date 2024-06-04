import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Button, Form, InputGroup} from 'react-bootstrap';
import {useState} from "react";
import List from './layout/fact.layout'

function App() {
  const [textData, setText] = useState('')
  const showList = () => {
    alert(`text ${textData}`)
  }

  return (
    <div className="App">
      <section id="InputFacts">
          <Container>
              <Row>
                <label><h1>Bienvenido</h1></label>
              </Row>
              <Row>
                  <InputGroup className="mb-3">
                      <Form.Control id="textInput"
                        placeholder="Inserte texto"
                        aria-label="Inserte texto"
                        aria-describedby="basic-addon2"
                        onChange={(component) => setText(component.target.value)}
                      />
                      <Button variant="outline-secondary" id="button-addon2" onClick={showList}>
                        Ingresar
                      </Button>
                </InputGroup>
              </Row>
          </Container>
      </section>
      <section id="FactsList">
        <List text={textData}/>
      </section>

    </div>
  );
}

export default App;
