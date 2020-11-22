import React from 'react';

const QuizCard = props => {
    const { list , index , onAnsSubmit } = props;
    return ( 
        <div className='row row-5 mt-5'>
            <div className="card text-primary border-primary col-3 mx-auto">
                <div className="card-body">
                <h2 className="card-title">{list[index].question}</h2>
                <ul key={list[index].id} className="list-group">
                    {list[index].options.map(option => 
                                            
                                            <li className="list-group-item"><button onClick={() => onAnsSubmit(option.isCorrect)} className='btn btn-outline-primary btn-block' type='button'>{option.answer}</button></li>
                                            
                                        
                        )}
                        </ul>    
                </div>
            </div>
        </div>
     );
}
 
export default QuizCard;