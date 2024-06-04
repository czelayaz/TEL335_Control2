import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Button, Form, InputGroup} from 'react-bootstrap';
import List from './layout/fact.layout'

function App() {
  return (
    <div className="App">
      <section id="InputFacts">
          <Container>
              <Row>
                <label><h1>Bienvenido</h1></label>
              </Row>
              <Row>
                  <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Inserte link"
                        aria-label="Inserte link"
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        Button
                      </Button>
                </InputGroup>
              </Row>
          </Container>
      </section>
      <section id="FactsList">
        <List/>
      </section>
    </div>
  );
}

export default App;
