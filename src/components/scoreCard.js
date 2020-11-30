import React from 'react';

const ScoreCard = props => {
    const { score } = props;
    return ( 
        <div className='row row-4 mt-5'>
            <h2 className='score mx-auto'><span className='badge badge-warning'>Your Current Score : </span><span className='badge badge-success'>{score} / 10</span></h2>
        </div>
     );
}
 
export default ScoreCard;