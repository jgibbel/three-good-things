import React from 'react';

const ThreeCard = ({name, threeArr}) => {
    return (
        <div className="card-container">
            <h3>{name}</h3>
            <ol  className="card-list">
            <li className="card-text">{threeArr[0]}</li>
            { threeArr[1] ? <li className="card-text">{threeArr[1]}</li> : null}
            { threeArr[2] ? <li className="card-text">{threeArr[2]}</li> : null}
            </ol>
        </div>
    );
};

export default ThreeCard; 