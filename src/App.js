import React from 'react';
import './App.css';

function App() {
  const [state,setState]=React.useState({ age: 21 })
  function onAgeUp(){
    setState(prevVal=>{return{...prevVal,age: prevVal.age++}})
  }
  function onAgeDown(){
    setState(prevVal=>{return{...prevVal,age: prevVal.age--}})
  }
  return (
    <div className="App">
      <h3>Age : <span>{state.age}</span></h3>
      <button onClick={onAgeUp}>Age Up</button>
      <button onClick={onAgeDown}>Age Down</button>
    </div>
  );
}

export default App;
