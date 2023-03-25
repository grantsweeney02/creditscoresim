import React from 'react'


const QuestionCard = ({ q }) => {
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
   {q.options?.map(o => <p>{o}</p>)}
        </div>
        
    </div>
  )
}

export default QuestionCard