import React from 'react';
import {
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
import './About.css';

// Images for Cards
import flashImg from '../../img/flash.png';
import testImg from '../../img/test.png';
import selectImg from '../../img/select.png';

export default function About () {
    return (
        <Container className="About px-lg-5">
            <h2 className="text-white text-center" id="about">What is Mico?</h2>
            <Row>
                <Col md="4" className="about-cards">
                    <Card className="about-bg">
                        <CardBody className="about-body">
                            <div className="about-icons"><img src={flashImg} className="about-img" alt="A cartoon drawing of a girl sitting on a stool and picking different sticky notes."/></div>
                            <CardTitle tag="h2">A study tool</CardTitle>
                            <CardSubtitle tag="h6">Interview style questions geared for web developers.</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4"  className="about-cards">
                    <Card className="about-bg">
                        <CardBody className="about-body">
                            <div className="about-icons"><img src={testImg} className="about-img" alt="A cartoon character deciding between different notes."/></div>
                            
                            <CardTitle tag="h2">Flash cards</CardTitle>
                            <CardSubtitle tag="h6">Customizable and randomized flash card style questions.</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="about-cards">
                    <Card className="about-bg">
                        <CardBody className="about-body">
                            <div className="about-icons"><img src={selectImg} className="about-img" alt="A cartoon drawing of someone checking a list."/></div>
                            <CardTitle tag="h2">Test report</CardTitle>
                            <CardSubtitle tag="h6">Comprehensive report of your question/answers for review at the end of your test.</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}