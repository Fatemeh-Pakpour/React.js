import React from 'react';


const Counter = (props)=>{
    let index = props.index;
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick = {()=>{props.changeScore(index,-1)}}>-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick = {()=>{props.changeScore(index, 1)}}>+</button>
        </div>
        );
}
      
    
  
  


export default Counter;