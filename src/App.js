import './style.scss';
import React, { useState } from 'react';

export default function App() {
  const[count, setCount] = useState(0);
  function minus(){
    setCount(prev => prev-1)
  }
  function plus(){
    setCount(prev => prev+1)
  }

  return (
    <div className="App">
      <h1 className={count > 0 ? "positive": count < 0 ? "negative" :null}>{count}</h1>
      <div className="button-wrapper">
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
}