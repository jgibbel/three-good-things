import React, { Component } from 'react';
import ThreeCard from './ThreeCard'

class WeekCards extends Component {

    splitLeft = () => {
        const whole = this.props.array
        const left = whole.slice(0, Math.ceil(whole.length/2))
        const right = whole.slice(Math.ceil(whole.length/2))
        return [left, right]
    } 

    render() {
        return (
            <div>
                <div className="columns">
                            <div className="column">
                            {this.splitLeft()[0].map((card) => {return(<ThreeCard name={card[0]} threeArr={card[1]} />)})}
                            </div>
                            <div className="column">
                            {this.splitLeft()[1].map((card) => {return(<ThreeCard name={card[0]} threeArr={card[1]} />)})}
                            </div>
                </div>
            </div>
        );
    }
}

export default WeekCards;
