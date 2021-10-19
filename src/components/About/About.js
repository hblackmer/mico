import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <Container className="About px-lg-5">
                <h2 className="text-white text-center" id="about">What is Mico?</h2>
                <Row>
                    <Col md="4" className="about-cards">
                        <Card className="about-bg">
                            <CardBody className="about-body">
                                <div className="about-icons"><img src="/assets/flash.png" className="about-img" /></div>
                                <CardTitle tag="h2">A study tool</CardTitle>
                                <CardSubtitle tag="h6">Customizable and randomized questions.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4"  className="about-cards">
                        <Card className="about-bg">
                            <CardBody className="about-body">
                                <div className="about-icons"><img src="/assets/test.png" className="about-img" /></div>
                                <CardTitle tag="h2">Flash cards</CardTitle>
                                <CardSubtitle tag="h6">Flash card style questions.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="about-cards">
                        <Card className="about-bg">
                            <CardBody className="about-body">
                                <div className="about-icons"><img src="/assets/select.png" className="about-img" /></div>
                                <CardTitle tag="h2">Test report</CardTitle>
                                <CardSubtitle tag="h6">Comprehensive report of your question/answers for review at the end of your test.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default About;  