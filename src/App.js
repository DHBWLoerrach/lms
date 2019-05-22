import React from 'react';
import './App.css';
import Question from './components/Question';

const question = {
  text: 'Lokale Variablen werden deklariert mit…',
  choices: ['var', 'let', 'const'],
  answer: 'let'
};

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Question question={question} />
      </div>
    </div>
  );
}

export default App;
