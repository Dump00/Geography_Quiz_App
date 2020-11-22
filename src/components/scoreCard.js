import React from 'react';

const ScoreCard = () => {
    return ( 
        <div className='row row-4'>
            <h2 className='score mx-auto'>Your Current Score 👉 <span className='badge badge-success'>0</span></h2>
        </div>
     );
}
 
export default ScoreCard;