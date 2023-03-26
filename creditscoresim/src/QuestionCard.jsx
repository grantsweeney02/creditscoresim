import React from 'react'
import OptionBtn from './OptionBtn';


const QuestionCard = ({ q, nq, p}) => {
  
  return (
    
    <div className="question-card">
        <h3 className="question">{q.questionText}</h3>
        {/* <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}> */}
        <div className="options-section">
   {q.options?.map(o => <OptionBtn o={o} nq={nq} p={p}/>)}
        </div>
        
    </div>
  )
}

export default QuestionCard