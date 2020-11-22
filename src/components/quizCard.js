import React from 'react';

const QuizCard = () => {
    return ( 
        <div className='row row-5 mt-5'>
            <div class="card text-primary border-primary col-3 mx-auto">
                <div class="card-body">
                <h2 class="card-title"> My List</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Item One</button></li>
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Item Two</button></li>
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Item Three</button></li>
                        <li class="list-group-item"><button className='btn btn-outline-primary btn-block' type='button'>Item Four</button></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default QuizCard;