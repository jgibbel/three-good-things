import React from 'react';
import './index.css';
import Form from './Form'
import {
    Link
  } from "react-router-dom";

import tarot from './images/3thingstarot.png'

const Home = () => {
    return (
        <div className="home">
            <div className="home-cont">
                <div className="left-item">
                    <h2 className="home-h2 big">Last week,  I realized I could use <br></br><Link to="/lh-good"><span className="home-link">three good things</span></Link>. </h2>
                    <h2 className="home-h2 med">
                    Then  I shared them with some of my friends.  It helped a bit. Then they shared theirs with me. That helped even more. 
                    </h2>
                    <h2 className="home-h2 med">
                        Then James, the original Three Good Things practitioner, made a website for everyone's good things.</h2>
                    <h2 className="home-h2 sm">Thanks to everyone for sharing their Three Good Things. It helps. </h2>
                </div>
                <div className="right-item">
                    <img className="tarot-photo" src={tarot} alt="first good things" />
                </div>
                
            </div>
                     
        <Form />

            
        </div>
    );
}

export default Home;
