import './styles/style.css';
import QuestionCard from './QuestionCard';
import React,{ useState } from 'react'

class Option {
    constructor(optionText, question, colEffect, atpEffect, debtEffect, phEffect, ) {
        this.optionText = optionText;
        this.question = question;
        this.colEffect = colEffect;
        this.atpEffect = atpEffect;
        this.debtEffect = debtEffect;
        this.phEffect = phEffect;
        
 }
}

// class Edge {
//     constructor(qU, qV, option) {
//         this.qU = qU;
//         this.qV = qV;
//         this.option = option;
//     }
// }



class Question {
    constructor(questionText, options=[]) {
        this.questionText = questionText;
        this.options = options;
    }
}

// const eduPath = [new Question("What college?",
// [new Option("UVA"),new Option("VT")]),
// new Question("Major?",
// [new Option("CS"),new Option("CPE")]),
// new Question("Question 3",
// new Option("A"),new Option("B"))];

// const questions = [eduPath];

const majors = [["English","Poetry","Philosophy","Media Studies"],
["Computer Engineering","Computer Science","Mechanical Engineering","Chemical Engineering"],
["Biology","Chemistry","Psychology","Neuroscience"],
["Accounting","Finance","Commerce","Economics"]]

const beatJobs = [["Enlist in the armed forces","Chicken farmer","McDonald's burger flipper"],["Masseuse","GrubHub Delivery","Musician"]];

const collegeQ = new Question("Would you like to go college?");
const majorQ = new Question("What would you like to study?");
const careerQ = new Question("What would you like to do next?");
const industryQ = new Question("What job will you take?");
const locationQ = new Question("Where do you want to live?");
const carQ = new Question("What kind of car do you want?");
const kidsQ = new Question("How many kids do you want?");
const schoolQ = new Question("Where will you send your kids?");
const q8 = new Question("Question 8");


collegeQ.options[0] = new Option("Yes",majorQ);
collegeQ.options[1] = new Option("No",industryQ);

majorQ.options[0] = new Option(majors[0][Math.floor(Math.random()*4)],careerQ);
majorQ.options[1] = new Option(majors[1][Math.floor(Math.random()*4)],careerQ);
majorQ.options[2] = new Option(majors[2][Math.floor(Math.random()*4)],careerQ);
majorQ.options[3] = new Option(majors[3][Math.floor(Math.random()*4)],careerQ);

industryQ.options[0] = new Option(beatJobs[0][Math.floor(Math.random()*3)],locationQ);
industryQ.options[1] = new Option(beatJobs[1][Math.floor(Math.random()*3)],locationQ);

careerQ.options[0] = new Option("Graduate School",locationQ);
careerQ.options[1] = new Option("Take a career in your field",locationQ);
careerQ.options[2] = new Option("Burn out",locationQ);

locationQ.options[0] = new Option("Urban area",kidsQ);
locationQ.options[1] = new Option("The suburbs",carQ);
locationQ.options[2] = new Option("Buttfuck nowhere",carQ);

carQ.options[0] = new Option("Used car",kidsQ);
carQ.options[1] = new Option("Brand new car",kidsQ);

kidsQ.options[0] = new Option("0 kids",);
kidsQ.options[1] = new Option("1 kid",schoolQ);
kidsQ.options[2] = new Option("2 kids",schoolQ);
kidsQ.options[3] = new Option("4 kids",schoolQ);

schoolQ.options[0] = new Option("Public school",);
schoolQ.options[1] = new Option("Private school",)













function App() {

    const [currQuestion, setCurrQuestion] = useState(collegeQ);

    const nextQuestion = (option)=> {
        if(option.question != null) {
         setCurrQuestion(option.question);
        }
        else setCurrQuestion(null);
    }
    

  return (

    <div className='question-card'>
    {currQuestion != null ? <QuestionCard q={currQuestion} nq={nextQuestion}/>: <p>No more</p> }
    </div>
  );
}

export default App;