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

questions = [Question("Question 1",["A","B"],Question("Question 2",["#","?"],Question("Question 3",["Hi","Bye"],null)))]

function App() {
  return (
    <div></div>
    <QuestionCard questionText={"Question 1"} options={["Option A","Option B"]}/>
  );
}

export default App;