import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    variants: ['application', 'part of an application or page', "I don't know what is"],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      "It's simple HTML",
      "it's function",
      'This is the same HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You guessed right {correct} response from {questions.length}</h2>
      <a href="/">
      <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ step, question, onCLickVariant }) {
   const percentage = Math.round(step / questions.length * 100);
  console.log(percentage);


  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
          {question.variants.map((text, index) => (
          <li onClick={() => onCLickVariant(index)} key={text}>{text}</li>
            ))}
      </ul>
    </>
  );
}

function App() {
const [step, setStep] = React.useState(0);
const [correct, setCorrect] = React.useState(0);
const question = questions[step];


const onCLickVariant = (index) => {
  setStep(step + 1);
  console.log(step, index);

  if( index === question.correct) {
    setCorrect(correct + 1);
  }
};

  return (
    <div className="App">
    {
      step !== questions.length ? (
      <Game step={step} question={question} onCLickVariant={onCLickVariant} />
      ) : (
      <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
