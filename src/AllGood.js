import React from 'react';
import './index.css';
import Things from './Things.json'
import ThreeCard from './ThreeCard'

const AllGood = () => {
    return (
        <div>
            {Things.sort((a,b) => (a.number < b.number) ? 1 : -1).map((week) => {
                return(
                    <div className="week-container">
                        <h2 className="week-name">{week.week_name}</h2>
                        {week.things.map((card) => {return(<ThreeCard name={card[0]} threeArr={card[1]} />)})}
                    </div>
                )
            })}
        </div>
    );
}

export default AllGood;
