
import React, { Component } from 'react';

class Stopwatch extends Component {
    state ={
        isRunning : false,
        elapsedTime : 0,
        previousTime :0
    }
    
    componentDidMount =()=>{
        this.intervalID = setInterval(()=>this.tick(),100);
    }
    componentWillUnmount = ()=>{
        clearInterval(this.intervalID);
    }
    
    tick =()=>{
      if(this.state.isRunning){
          const now = Date.now();
          this.setState(prevState =>{
            return {
                previousTime:now,
                elapsedTime:prevState.elapsedTime + (now -prevState.previousTime)      
            }  
           
          })
      }
    }
    handleStopWatch = ()=>{ 
       this.setState({isRunning: !this.state.isRunning 
    });
    if(!this.state.isRunning){
       this.setState({
           previousTime:Date.now()
       })
    }
    }
    handleReset = ()=>{
        this.setState({
            elapsedTime:0
        })
    }
    
    render() {
        const second =Math.floor(this.state.elapsedTime/1000)
        return (
            <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{second}</span>   
            <button onClick = {this.handleStopWatch}>{this.state.isRunning ? 'stop' : 'start'}</button>
            <button onClick = {this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;
