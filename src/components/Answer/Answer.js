import React, { Component, Fragment } from 'react';
import {
    Button,
    Container, Row, Col,
    Form, FormGroup, Input, Label,
} from 'reactstrap';
import '../Test/Test.css';

const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const answer = document.querySelector('#answer-textarea');
let time = 0,
    interval;

class Answer extends Component {
    showTime() {
        time += 1;
        timer.innerHTML = this.toHHMMSS(time);
    }
    
    start() {
        interval = setInterval(this.showTime, 1000);
        this.hideBtn([start_btn]);
        //showBtn([pause_btn, reset_btn]);
        timer.style.display = 'inline-block';
        answer.style.display = 'block';
    }
    
    pause() {
        if (interval) {
            clearInterval(interval);
            interval = null;
            pause_btn.innerHTML = 'RESUME';
        } else {
            interval = setInterval(this.showTime, 1000);
            pause_btn.innerHTML = 'PAUSE';
        }
    }
    
    reset() {
        clearInterval(interval);
        interval = null;
        pause_btn.innerHTML = 'PAUSE';
        time = 0;
        timer.innerHTML = this.toHHMMSS(time);
        this.hideBtn([pause_btn/*, reset_btn*/]);
        this.showBtn([start_btn]);
    }
    
    toHHMMSS(time) {
        let hours = Math.floor(time / 3600);
        let minutes = Math.floor((time - hours * 3600) / 60);
        let seconds = time - hours * 3600 - minutes * 60;
    
        hours = `<i class="fas fa-stopwatch"></i> ${hours}`.padStart(2, '0');
        minutes = `${minutes}`.padStart(2, '0');
        seconds = `${seconds}`.padStart(2, '0');
    
        return hours + ':' + minutes + ':' + seconds;
    }
    
    showBtn(btnArr) {
        btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
    }
    hideBtn(btnArr) {
        btnArr.forEach((btn) => (btn.style.display = 'none'));
    }

    render() {
        return (
            <Fragment>
                <h3 className="time text-green"><i className="fas fa-stopwatch" /> 00:00:00</h3>
                <Form id="answer-textarea">
                    <Row className="form-group mt-3">
                        <Label for="feedback" className="row col-form-label fs-3 text-primary">Answer:</Label>
                        <div className="row">
                            <textarea className="form-control" id="answer" name="answer" rows="4"></textarea>
                        </div>
                    </Row>
                    <Row className="form-group mt-3">
                        <a href="results.html" className="btn btn-primary">Submit</a>
                        <Button type="submit" className="btn btn-success bg-transparent arrow-size float-end text-success"><i className="far fa-caret-square-right" /></Button>
                        <Button type="submit" className="btn btn-success bg-transparent arrow-size float-end text-success"><i className="far fa-caret-square-left" /></Button>
                    </Row>
                </Form>
            </Fragment>
        );
    }
}
  
export default Answer;  