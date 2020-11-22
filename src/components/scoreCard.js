import React from 'react';

const ScoreCard = props => {
    const { score } = props;
    return ( 
        <div className='row row-4 mt-5'>
            <h2 className='score mx-auto'>Your Current Score 👉 <span className='badge badge-success'>{score}/10</span></h2>
        </div>
     );
}
 
export default ScoreCard;