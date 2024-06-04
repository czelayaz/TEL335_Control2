import {Col, Container, Row} from "react-bootstrap";

function FactsList (props){
    console.log(props.facts)
    return(
        <section id="ListOfFacts">
            <Container>
                <Row>
                    <Col>
                    <label>Facts:</label>
                        <ul className="arrow-styled">
                                {
                                props.facts.map((fact, index) => {
                                    console.log(fact)
                                    return(
                                        <div key={index} className='row'>
                                            <Row>
                                                <Col>
                                                    <h5>{fact.value}</h5>
                                                </Col>
                                            </Row>
                                        </div>
                                    )})
                                }
                            </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FactsList
