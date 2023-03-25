import './styles/style.css';
import QuestionCard from './QuestionCard';



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