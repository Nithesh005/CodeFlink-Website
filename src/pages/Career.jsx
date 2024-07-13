import { Col, Container, Row } from 'react-bootstrap'
import '../Css/Career.css'
const Career = () => {

    return (
        <div className="careers">
            <Container className="headcontainer">
                {/* <Row className='details-car-he'>
                    <Col lg={2} md={2} xs={2}></Col>
                    <Col lg={8} md={8} xs={8}>
                        <h1 className=' fon1'>
                            CAREER
                        </h1>

                    </Col>
                    <Col lg={2} md={2} xs={2}></Col>
                </Row> */}
                <Row className='details-car'>
                    <Col>
                        <h1 className='firt-cont'> Be Part Of Our Mission</h1>
                        <p className='sec-cont'> We're looking for passionate people to join us on our mission.We value flat hierachies,clear communication,and full ownership and responsibility</p>
                    </Col>
                </Row>

            </Container>
            <div className="careers1">
                <Row >
                    <Col lg={2} md={2} xs={2}></Col>
                    <Col lg={8} md={8} xs={8}>
                        <div className="blac-card--">
                            <div className="cont1">
                                "Design is the intermediary between information and understanding."
                            </div>
                            <div className="cont2">
                                -CHARLES EAMES
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={2} xs={2}></Col>

                </Row>
            </div>
        </div>
    )
}
export default Career;