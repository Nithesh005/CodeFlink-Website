import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Css/Career.css'
import Collaborative from "../assets/logo/Collaborative.svg";
import Growth from "../assets/logo/Growth.svg";
import Innovative from "../assets/logo/Innovative.svg";
import AOS from "aos";
import TypingEffect from '../componets/TypingEffect';
const Career = () => {
    const text = "We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.";

    return (
        <div className="careers">
            <div className="headcontainer">
                {/* <Row className='details-car-he'>
                    <Col lg={2} md={2} xs={2}></Col>
                    <Col lg={8} md={8} xs={8}>
                        <h1 className=' fon1'>
                            CAREER
                        </h1>

                    </Col>
                    <Col lg={2} md={2} xs={2}></Col>
                </Row> */}
                <Row className='details-car' >
                    <Col lg={12} md={1} xs={2}></Col>
                    <Col lg={12} md={10} xs={8}>
                        <div data-aos="fade-left" >
                            <h1 className='firt-cont'> Be Part Of Our Mission</h1>
                            <div className="firt-cont1">
                            <TypingEffect text={text} />
                                <Button className='butpad' variant="dark">View Job </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={1} xs={2}></Col>
                </Row>

            </div>
{/* Content Of Ath  */}
            <div className="careers1" >
                <Row >
                    {/* <Col lg={12} md={2} xs={2}></Col> */}
                    <Col lg={12} md={12} xs={12}>
                        <div className="blac-card--" >
                            <div className="cont1" data-aos="fade-left">
                                "Design is the intermediary between information and understanding."
                            </div>
                            <div className="cont2" data-aos="fade-left">
                                -CHARLES EAMES
                            </div>
                        </div>
                    </Col>
                    {/* <Col lg={2} md={2} xs={2}></Col> */}
                </Row>
            </div>

{/* Why Work With Codeflink  */}
            <Container className='careers2'>
                <Row>
                    <Col lg={2} md={3} xs={1}></Col>
                    <Col lg={8} md={6} xs={10}>
                        <h1 className='workus--page' data-aos="fade-right">
                            WHY <p className='c-name'>CODE FLINK ?</p>
                            {/* WORK WITH */}
                        </h1>
                    </Col>
                    <Col lg={2} md={3} xs={1}></Col>
                </Row>
                <Row >
                    <Col lg={4} md={4} xs={12} >
                        <Card style={{ width: '18rem' }} data-aos="flip-down" className='product-card' >
                            <Card.Img variant="top" src={Innovative} className='im-log'/>
                            <Card.Body>
                                <Card.Title className='tit-car'>Innovative</Card.Title>
                                <Card.Text>
                                    Work on cutting-edge projects that redefine visual storytelling and digital marketing.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} xs={12}><Card style={{ width: '18rem' }} className='product-card' data-aos="flip-down">
                        <Card.Img variant="top" src={Collaborative} className='im-log'/>
                        <Card.Body>
                            <Card.Title className='tit-car'>Collaborative</Card.Title>
                            <Card.Text>
                                Join a team that values creativity, collaboration, and continuous learning.
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                    <Col lg={4} md={4} xs={12}><Card style={{ width: '18rem' }} className='product-card' data-aos="flip-down">
                        <Card.Img variant="top" src={Growth} className='im-log' />
                        <Card.Body>
                            <Card.Title className='tit-car'>Growth</Card.Title>
                            <Card.Text>
                                Benefit from opportunities for professional development and career advancement.
                            </Card.Text>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>

        </div>
    )
}
export default Career;