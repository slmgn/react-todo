import React, { Component } from 'react';
import logo from './logo.svg';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter ></Counter>
      <Counter by={5}></Counter>
      <Counter by={10}></Counter>
    </div>
  );
}

class LearningComponent extends Component {
 render(){
   return(
    <div className="learningComponent">
    Hello World 
    <FirstComponent></FirstComponent>
    <SecondComponent></SecondComponent>
    <ThirdComponent></ThirdComponent>
    </div>
   )
 } 
}

export default App;
