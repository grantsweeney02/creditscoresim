import './styles/style.css';
import QuestionCard from './QuestionCard';

questions = []

function App() {
  return (
    
    <QuestionCard questionText={"Question 1"} options={["Option A","Option B"]}/>
  );
}

export default App;