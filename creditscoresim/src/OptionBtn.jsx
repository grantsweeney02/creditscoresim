import React from 'react'
// import QuestionCard from './QuestionCard'


const OptionBtn = ({ o, nq}) => {

  return (
    <div>
        <button className='option-btn' onClick={()=>{nq(o)}}>
            {o.optionText}
        </button>
    </div>
  )
}

export default OptionBtn