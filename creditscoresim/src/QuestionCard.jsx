import React from 'react'
import OptionBtn from './OptionBtn';


const QuestionCard = ({ q, nq}) => {
    // const onSelectAnswer = (event)=>{
    //     let btn = event.target
    //     addAnswer(btn.name,btn.value);
    // // }
    // console.log(props)
    // console.log(props.questionText);
    // console.log(props.options)
  return (
    
    <div className="question-card">
        <h3 className="question">{q.questionText}</h3>
        {/* <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}> */}
        <div className="options-section">
   {q.options?.map(o => <OptionBtn o={o} nq={nq}/>)}
        </div>
        
    </div>
  )
}

export default QuestionCard