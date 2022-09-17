import React from 'react';
import './App.css';
import { connect } from 'react-redux'


function App (props){
    return (
      <div className="App">
        <h3>Age : <span>{props.age}</span></h3>
        <button onClick={props.onAgeUp}>Age Up</button>
        <button onClick={props.onAgeDown}>Age Down</button>
      </div>
    );
}
const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: 'AGE_UP' }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN' })
  }

}

export default connect(mapStateToProps, mapDispachToProps)(App);
