import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="container px-lg-5">
                    <h2 className="text-white text-center" id="about">What is Mico?</h2>
                    <div className="row">
                        <div className="col-md-4 mb-5 about-cards">
                            <Card className="about-bg h-100">
                                <CardBody className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="about_icons"><img src="/assets/flash.png" class="about_img" /></div>
                                    <h2 className="fs-2 fw-bold">A study tool</h2>
                                    <p className="mb-0">Customizable and randomized questions.</p>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 mb-5 about-cards">
                            <Card className="about-bg h-100">
                                <CardBody className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="about_icons"><img src="/assets/test.png" class="about_img" /></div>
                                    <h2 className="fs-2 fw-bold">Flash cards</h2>
                                    <p className="mb-0">Flash card style questions.</p>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4  mb-5 about-cards">
                            <Card className="about-bg h-100">
                                <CardBody className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="about_icons"><img src="/assets/select.png" class="about_img" /></div>
                                    <h2 className="fs-2 fw-bold">Test report</h2>
                                    <p className="mb-0">Comprehensive report of your question/answers for review at the end of your test.</p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default About;  