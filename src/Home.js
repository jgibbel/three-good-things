import React from 'react';
import './index.css';
import Form from './Form'
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h2 className="home-h2">Last week,  I realized I could use <Link to="/lh-good"><span className="home-link">three good things</span></Link>. Then  I shared them with some of my friends.  It helped a bit. Then they shared theirs with me. That helped even more.</h2>

            <h2 className="home-h2">
            Then James, the original Three Good Things practitioner, made a website for everyone's good things.
            </h2>
            <h2 className="home-h2">
            Thanks to everyone for sharing their Three Good Things.  It helps. 
            </h2>
        <Form />

            
        </div>
    );
}

export default Home;
