import React from 'react';
import './index.css';
import LHThings from './LHThings.json'
import ThreeCard from './ThreeCard'

const LHGood = () => {
    return (
        <div>
            {LHThings.sort((a,b) => (a.number < b.number) ? 1 : -1).map((week) => {
                return(
                    <ThreeCard name={week.week_name} threeArr={week.things} />
                )
            })}
        </div>
    );
}

export default LHGood;
