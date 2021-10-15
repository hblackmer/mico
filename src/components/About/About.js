import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div class="container px-lg-5">
                    <h2 class="text-white text-center" id="about">What is Mico?</h2>
                    <div class="row">
                        <div class="col-lg-6 col-xxl-4 mb-5 about-cards">
                            <div class="card about-bg h-100">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div class="about_icons"><img src="/assets/flash.png" class="about_img" /></div>
                                    <h2 class="fs-2 fw-bold">A study tool</h2>
                                    <p class="mb-0">Customizable and randomized questions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xxl-4 mb-5 about-cards">
                            <div class="card about-bg h-100">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div class="about_icons"><img src="/assets/test.png" class="about_img" /></div>
                                    <h2 class="fs-2 fw-bold">Flash cards</h2>
                                    <p class="mb-0">Flash card style questions.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-xxl-4 mb-5 about-cards">
                            <div class="card about-bg h-100">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div class="about_icons"><img src="/assets/select.png" class="about_img" /></div>
                                    <h2 class="fs-2 fw-bold">Test report</h2>
                                    <p class="mb-0">Comprehensive report of your question/answers for review at the end of your test.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default About;  