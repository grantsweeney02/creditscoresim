import './styles/style.css';
import QuestionCard from './QuestionCard';

class Option {
    constructor(optionText, colEffect, atpEffect, debtEffect, phEffect) {
        this.optionText = optionText;
        this.colEffect = colEffect;
        this.atpEffect = atpEffect;
        this.debtEffect = debtEffect;
        this.phEffect = phEffect;
  }
}

class Question {
    constructor(questionText, options, nextQuestion) {
        this.questionText = questionText;
        this.options = options;
        this.nextQuestion = nextQuestion;
    }
}

const questions = [new Question("Question 1",["A","B"],new Question("Question 2",["#","?"],new Question("Question 3",["Hi","Bye"],null)))]
console.log(questions)
console.log(questions[0].options)
function App() {
  return (

    <div className='question-card'>
    <QuestionCard q={questions[0]}/>
    </div>
  );
}

export default App;