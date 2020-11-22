import React from 'react';

const QuizCard = () => {
    return ( 
        <div className='row row-5 mt-5'>
            <div class="card text-primary border-primary col-3 mx-auto">
                <div class="card-body">
                <h2 class="card-title">What is the name of the largest river to flow through Paris?</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Eure</button></li>
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Seine</button></li>
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Marne</button></li>
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Loing</button></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default QuizCard;