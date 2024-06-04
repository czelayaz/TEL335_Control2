import {Col, Container, Row, Button} from "react-bootstrap";

function FactsList (props){
    return(
        <section id="ListOfFacts">
            <Container>
                <Row>
                <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.facts.map((fact, index) => {
                                    return(
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col><label><h3>Dato:</h3></label></Col>
                                            <Col><label><h3>Dato:</h3></label></Col>
                                            <Col><label><h3>Dato:</h3></label></Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h5>{fact.value}</h5>
                                            </Col>
                                            <Col>
                                                <h5>{fact.created_at}</h5>
                                            </Col>
                                            <Col>
                                                <h5>{fact.categories}</h5>
                                            </Col>
                                        </Row>
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
