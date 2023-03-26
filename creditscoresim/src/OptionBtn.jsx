import React from 'react'
// import QuestionCard from './QuestionCard'


const OptionBtn = ({ o, nq, p}) => {
    const applyEffects = ()=> {
        p.col += o.colEffect;
        p.atp += o.atpEffect;
        p.debts += o.debtEffect;
        p.age+=o.ageEffect;
        p.ph += o.phEffect;
        
        let netIncome = p.atp - p.col;
        p.ph += netIncome*.2;
        p.debts -= netIncome*.5;
        if (p.debts < 0) p.debts = 0;
        // p.growth += p.growthEffect;

    }
  return (
    <div>
        <button className='option-btn' onClick={()=>{nq(o);applyEffects()}}>
            {o.optionText}
        </button>
    </div>
  )
}

export default OptionBtn