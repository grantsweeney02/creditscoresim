import React from "react";
import OptionBtn from "./OptionBtn";

const QuestionCard = ({ q, nq, p }) => {
    return (
        <div className="question__card">
            <h3 className="question__text">{q.questionText}</h3>
            <div class="line"></div>
            {/* <div className='answer-section' onChange={(e)=>{onSelectAnswer(e)}}> */}
            <div className="question__options">
                {q.options?.map((o) => (
                    <OptionBtn o={o} nq={nq} p={p} />
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
