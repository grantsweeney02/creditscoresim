import React from 'react'
// import QuestionCard from './QuestionCard'


const OptionBtn = ({ o, nq, p}) => {
    const applyEffects = ()=> {
        p.col += o.colEffect;
        p.atp += o.atpEffect;
        p.debts += o.debtEffect;
        p.age+=o.ageEffect;
        p.ph += o.phEffect;
        if(o.cardAgeEffect!=0) p.cardAge=o.cardAgeEffect;
        
        let netIncome = p.atp - p.col;
        p.ph += netIncome*.2;
        p.debts -= netIncome*.5;
        if (p.debts < 0) p.debts = 0;
        // p.growth += p.growthEffect;

        if(o.optionText === "Buy a warranty") p.hasWarranty = true;
    }
  return (
    <div>
        <button className='question__options_option' onClick={()=>{nq(o);applyEffects();p.calcCreditScore();}}>
            {o.optionText}
        </button>
    </div>
  )
}

export default OptionBtn