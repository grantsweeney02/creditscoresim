import "../styles/style.css";
import React, { useState } from "react";
import QuestionCard from "../QuestionCard";

class Option {
    constructor(
        optionText = "",
        question = null,
        ageEffect = 0,
        colEffect = 0,
        atpEffect = 0,
        debtEffect = 0,
        phEffect = 0,
        cardAgeEffect = 0
    ) {
        this.optionText = optionText;
        this.question = question;
        this.ageEffect = ageEffect;
        this.colEffect = colEffect;
        this.atpEffect = atpEffect;
        this.debtEffect = debtEffect;
        this.phEffect = phEffect;
        this.cardAgeEffect = cardAgeEffect;
        // this.growthEffect = growthEffect;
    }
}

class Player {
    constructor() {
        this.col = 0;
        this.atp = 0;
        this.debts = 0;
        this.age = 18;
        this.ph = 0;
        this.cardAge = 0;
        // this.growth = 0.0;
        this.hasWarranty = false;
        this.creditScore = 0;
    }
    calcCreditScore() {

        const rawScore = (this.ph + Math.max(0,this.age-this.cardAge))+(-this.debts);
        this.creditScore = ((Math.floor(rawScore)+30))*100;
        this.creditScore = (this.creditScore + 10000) / (20000)*(550)+300;

    }
}

const creditScoreRange = (score)=>{
    const scoreRanges = {
        "Excellent": [800,850],
        "Very Good": [750, 799],
        "Good": [700, 749],
        "Fair": [650,699],
        "Poor": [600,649],
        "Very Bad": [300, 599],
    };
    for (let k in scoreRanges) {
        if (score >= scoreRanges[k][0] && score <= scoreRanges[k][1]) {
            return [k,scoreRanges[k][0]+" - "+scoreRanges[k][1]];
        }
    }
}
const classNameColor = (str)=> {
    let color = "";
    if(str=="Excellent") color="best-green";
    else if(str=="Very Good") color="reg-green";
    else if(str=="Good") color="yellow";
    else if(str=="Fair") color="orange";
    else if(str=="Poor") color="coral";
    else if(str=="Very Bad") color="red";
    return color;
}

class Question {
    constructor(questionText, options = []) {
        this.questionText = questionText;
        this.options = options;
    }
}

let traceQuestion;
let player = new Player();

let cardHasBeenAsked = 0;

const majors = [
    ["English", "Poetry", "Philosophy", "Media Studies"],
    [
        "Computer Engineering",
        "Computer Science",
        "Mechanical Engineering",
        "Chemical Engineering",
    ],
    ["Biology", "Chemistry", "Psychology", "Neuroscience"],
    ["Accounting", "Finance", "Commerce", "Economics"],
];

const beatJobs = [
    [
        "Enlist in the armed forces",
        "Chicken farmer",
        "McDonald's burger flipper",
    ],
    ["Masseuse", "GrubHub Delivery", "Musician"],
];

// const vacations = [[]];
let initQ;
const creditQ = new Question(
    "You just turned 18! Would you like to get your first credit card?"
);
initQ = creditQ;
const collegeQ = new Question("Would you like to go college?");
const majorQ = new Question("What would you like to study?");
const careerQ = new Question("What would you like to do next?");
const industryQ = new Question("What job will you take?");
const locationQ = new Question("Where do you want to move?");
const houseQ = new Question("Where would you like to live?");
const carQ = new Question("What kind of car do you want?");
const tvQ = new Question(
    "You bought a new TV for your home! Would you like to buy a warranty?"
);
const kidsQ = new Question("How many kids do you want?");
const schoolQ = new Question("Where will you send your kids?");
const vacationQ = new Question("Where would you like to go on vacation?");

creditQ.options[0] = new Option("Yes", collegeQ, 1, 0, 0, 0, 0, player.age);
creditQ.options[1] = new Option("No", collegeQ);
collegeQ.options[0] = new Option("Yes", majorQ, 4, 0, 15, 30);
collegeQ.options[1] = new Option("No", industryQ, 1, 0, 30);

majorQ.options[0] = new Option(
    majors[0][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    10,
    10
);
majorQ.options[1] = new Option(
    majors[1][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    20,
    15
);
majorQ.options[2] = new Option(
    majors[2][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    25,
    20
);
majorQ.options[3] = new Option(
    majors[3][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    15,
    10
);

industryQ.options[0] = new Option(
    beatJobs[0][Math.floor(Math.random() * 3)],
    locationQ,
    0,
    0,
    7
);
industryQ.options[1] = new Option(
    beatJobs[1][Math.floor(Math.random() * 3)],
    locationQ,
    0,
    0,
    5
);

careerQ.options[0] = new Option("Graduate School", locationQ, 4, 5, 10, 10, 0);
careerQ.options[1] = new Option(
    "Take a career in your field",
    locationQ,
    0,
    0,
    15
);
careerQ.options[2] = new Option("Burn out", locationQ);

locationQ.options[0] = new Option("Urban area", kidsQ, 2, 35, 0, 0, 0);
locationQ.options[1] = new Option("The suburbs", carQ, 2, 20, 0, 15, 0);
locationQ.options[2] = new Option("Rural", carQ, 2, 15, 0, 0, 0);

carQ.options[0] = new Option("Used car", kidsQ, 1, 7, 0, 2);
carQ.options[1] = new Option("Brand new car", kidsQ, 1, 10, 0, 5);

// tvQ.options[0] = new Option("Buy a warranty", null);
// tvQ.options[1] = new Option("Don't buy a warranty", null);

houseQ.options[0] = new Option("House", kidsQ);
houseQ.options[1] = new Option("Apartment", kidsQ);

kidsQ.options[0] = new Option("0 kids",);
kidsQ.options[1] = new Option("1 kid", schoolQ, 2, 10, 0, 2);
kidsQ.options[2] = new Option("2 kids", schoolQ, 4, 18, 0, 4);
kidsQ.options[3] = new Option("4 kids", schoolQ, 7, 30, 0, 6);

schoolQ.options[0] = new Option("Public school",null, 1);
schoolQ.options[1] = new Option("Private school",null, 1, 15, 0, 8);

vacationQ.options[0] = new Option("");
vacationQ.options[1] = new Option("");

const Sim = () => {
    const [currQuestion, setCurrQuestion] = useState(initQ);

    const resetSim = () => {
        creditQ.questionText =
            "You just turned 18! Would you like to get your first credit card?";
        creditQ.options[0] = new Option(
            "Yes",
            collegeQ,
            4,
            0,
            15,
            30,
            0,
            player.age
        );
        creditQ.options[1] = new Option("No", collegeQ, 1, 0, 30);
        setCurrQuestion(initQ);
        player = new Player();
        cardHasBeenAsked = 0;
    };
    const nextQuestion = (option) => {

        if ((player.cardAge === 0) && ((cardHasBeenAsked === 0 && player.age >= 25) || (cardHasBeenAsked === 1 && player.age >= 35))) {

            cardHasBeenAsked++;
            traceQuestion = option.question;
            creditQ.questionText =
                "You're " +
                player.age +
                " years old. Would you like a credit card now?";
            creditQ.options[0] = new Option("Yes", traceQuestion);
            creditQ.options[0].cardAgeEffect = player.age;
            creditQ.options[1] = new Option("No", traceQuestion);
            setCurrQuestion(creditQ);
        } else if (option.question != null) {
            setCurrQuestion(option.question);
        } else setCurrQuestion(null);
    };

    return (
        <aside>
            {currQuestion != null ? (
                <div className="container">
                    <QuestionCard
                        q={currQuestion}
                        nq={nextQuestion}
                        p={player}
                    />
                </div>
            ) : (
                <div className="container">
                    <div className="question__card">
                        <h3 className="question__text">You Finished!</h3>
                        <div class="line"></div>
                        <div className="question__options">
                            <button
                                className="question__options_option"
                                onClick={() => resetSim()}
                            >
                                Play Again?
                            </button>
                        </div>
                    </div>
                    <div className="credit_score">
                        <h1 className={"credit_score_text"+"_"+classNameColor(creditScoreRange(player.creditScore)[0])}>
                            Credit Score: {creditScoreRange(player.creditScore)[1]}{" "}
                        </h1>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sim;
