import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Customize from '../Customize/Customize';
import './Showcase.css';

export default function Showcase ({ toggleModal, isModalOpen }) {
    return (
        <div className="Showcase">
            <div id="overlay"></div>
            <div id="header">
                <h1 id="header-name">MICO</h1>
                <p id="subtitle" className="d-none d-md-block">a study tool for web developers</p>
                <Link to="/mico/start">
                    <Button
                        className="test-button"
                        onClick={toggleModal}
                    >Get Started</Button>
                </Link>
            </div>
            <Customize
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
            />
        </div>
    );
}