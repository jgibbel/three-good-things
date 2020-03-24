import React from 'react';
import './index.css';
import Things from './Things.json'
import ThreeCard from './ThreeCard'
import WeekCards from './WeekCards'

const AllGood = () => {
    return (
        <div>
            {Things.sort((a,b) => (a.number < b.number) ? 1 : -1).map((week) => {
                return(
                    <div className="week-container">
                        <h2 className="week-name">{week.week_name}</h2>
                        <WeekCards array={week.things} />
                    </div>
                )
            })}
        </div>
    );
}

export default AllGood;
