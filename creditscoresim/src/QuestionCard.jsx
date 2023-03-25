import React from 'react'


const QuestionCard = ({ questionText,options }) => {
    // const onSelectAnswer = (event)=>{
    //     let btn = event.target
    //     addAnswer(btn.name,btn.value);
    // }
  return (
    <div className="question-card">
        <h3 className="question">{questionText}</h3>
        {/* <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}> */}
        <div className="options-section">
        {options.map((i)=>
        <p>Option{i}</p>
            // <Option
            // answerText={ans.answerText}
            // answerValue={ans.answerValue}
            // parameter={parameter}
            // key={index}/>
            )}
        </div>
        
    </div>
  )
}

export default QuestionCard