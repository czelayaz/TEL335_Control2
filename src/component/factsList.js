import {Col, Container, Row, Button} from "react-bootstrap";

function FactsList (props){
    return(
        <section id="ListOfFacts">
            <Container>
                <Row>
                <div className="col-12 text-left">
                <Row>
                    <Col><label><h5>Dato:</h5></label></Col>
                    <Col><label><h5>Fecha de Creación:</h5></label></Col>
                    <Col><label><h5>Categorías:</h5></label></Col>
                    <Col><label><h5>Opinión:</h5></label></Col>
                </Row>
                        <ul className="arrow-styled">
                            {
                                props.facts.map((fact, index) => {
                                    return(
                                    <div key={index} className='row'>
                                        <div class="row border-bottom">
                                            <Col>
                                                <h7>{fact.value}</h7>
                                            </Col>
                                            <Col>
                                                <h7>{fact.created_at.split(' ')[0]}</h7>
                                            </Col>
                                            <Col>
                                                <h7>{fact.categories}</h7>
                                            </Col>
                                            <Col>
                                                <Button variant="outline-danger" >Me Gusta</Button>
                                            </Col>
                                        </div>
                                    </div>
                                )})
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default FactsList
