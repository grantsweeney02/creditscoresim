import "../styles/style.css";
import React, { useState } from 'react';
import QuestionCard from "../QuestionCard";

class Option {
    constructor(
        optionText,
        question,
        ageEffect,
        colEffect,
        atpEffect,
        debtEffect,
        phEffect
    ) {
        this.optionText = optionText;
        this.question = question;
        this.ageEffect = ageEffect;
        this.colEffect = colEffect;
        this.atpEffect = atpEffect;
        this.debtEffect = debtEffect;
        this.phEffect = phEffect;
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
}

class Question {
    constructor(questionText, options = []) {
        this.questionText = questionText;
        this.options = options;
    }
}

let traceQuestion;
const player = new Player();

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

const vacations = [[]];

const creditQ = new Question(
    "You just turned 18! Would you like to get your first credit card?"
);
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

creditQ.options[0] = new Option("Yes", collegeQ, 4, 0, 15, 30, 0);
creditQ.options[1] = new Option("No", collegeQ, 1, 0, 30, 0, 0);
collegeQ.options[0] = new Option("Yes", majorQ, 4, 0, 15, 30, 0);
collegeQ.options[1] = new Option("No", industryQ, 1, 0, 30, 0, 0);

majorQ.options[0] = new Option(
    majors[0][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    10,
    10,
    0
);
majorQ.options[1] = new Option(
    majors[1][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    20,
    15,
    0
);
majorQ.options[2] = new Option(
    majors[2][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    25,
    20,
    0
);
majorQ.options[3] = new Option(
    majors[3][Math.floor(Math.random() * 4)],
    careerQ,
    0,
    0,
    15,
    10,
    0
);

industryQ.options[0] = new Option(
    beatJobs[0][Math.floor(Math.random() * 3)],
    locationQ,
    0,
    0,
    7,
    0,
    0
);
industryQ.options[1] = new Option(
    beatJobs[1][Math.floor(Math.random() * 3)],
    locationQ,
    0,
    0,
    5,
    0,
    0
);

careerQ.options[0] = new Option("Graduate School", locationQ, 4, 5, 10, 10, 0);
careerQ.options[1] = new Option(
    "Take a career in your field",
    locationQ,
    0,
    0,
    15,
    0,
    0
);
careerQ.options[2] = new Option("Burn out", locationQ, 0, 0, 0, 0, 0);

locationQ.options[0] = new Option("Urban area", kidsQ, 2, 35, 0, 0, 0);
locationQ.options[1] = new Option("The suburbs", carQ, 2, 20, 0, 15, 0);
locationQ.options[2] = new Option("Rural", carQ, 2, 15, 0, 0, 0);

carQ.options[0] = new Option("Used car", houseQ, 1, 7, 0, 2, 0);
carQ.options[1] = new Option("Brand new car", houseQ, 1, 10, 0, 5, 0);

tvQ.options[0] = new Option("Buy a warranty", null);
tvQ.options[1] = new Option("Don't buy a warranty", null);

houseQ.options[0] = new Option("House", kidsQ);
houseQ.options[1] = new Option("Apartment", kidsQ);

kidsQ.options[0] = new Option("0 kids", null, 0, 0, 0, 0, 0);
kidsQ.options[1] = new Option("1 kid", schoolQ, 2, 10, 0, 2, 0);
kidsQ.options[2] = new Option("2 kids", schoolQ, 4, 18, 0, 4, 0);
kidsQ.options[3] = new Option("4 kids", schoolQ, 7, 30, 0, 6, 0);

schoolQ.options[0] = new Option("Public school", tvQ, 1, 0, 0, 0, 0);
schoolQ.options[1] = new Option("Private school", tvQ, 1, 15, 0, 8, 0);

vacationQ.options[0] = new Option("");
vacationQ.options[1] = new Option("");

const Sim = () => {
        const [currQuestion, setCurrQuestion] = useState(creditQ);

    const nextQuestion = (option) => {
        if (
            (cardHasBeenAsked === 0 && player.age >= 25) ||
            (cardHasBeenAsked === 1 && player.age >= 35)
        ) {
            cardHasBeenAsked++;
            traceQuestion = option.question;
            creditQ.questionText =
                "You're " +
                player.age +
                " years old. Would you like a credit card now?";
            creditQ.options[0] = new Option("Yes", traceQuestion);
            creditQ.options[1] = new Option("No", traceQuestion);
            setCurrQuestion(creditQ);
        } else if (option.question != null) {
            setCurrQuestion(option.question);
        } else setCurrQuestion(null);
    };

    return (
        <div className="container">
            {currQuestion != null ? (
                <QuestionCard q={currQuestion} nq={nextQuestion} p={player} />
            ) : (
                <p>No more</p>
            )}
        </div>
            );
        }

export default Sim;
