
// const title = "The first react code";

// const description = "I am learning the react coding";
// const idTitle = "main-title";
// const name ="Fatemeh";
// const header = (
//     <header>
//     {/* comments */}
//         <h1 id ={idTitle}>{name}'s First React Element</h1>
//         <p className ="headline">{description}</p>
//     </header>   
// );


const Header =(props)=>{
    return (
      <header>
        <h1>{props.title}</h1>
        <span className ="stats">Players : {props.totalPlayers}</span>
     </header>
    );   
}

const Player = (props)=>{
    return(
<div className ="player">
    <span className ="player-name">{props.playerName}</span>
   <Counter score= {props.score}/> 
</div>
    );
}
const Counter = (props)=>{
    return (
      <div className ="counter">
        <button className ="counter-action decrement">-</button>
        <div className="counter-score">{props.score}</div>
        <button className="counter-action increment">+</button>
       </div>
    );
}
const App = ()=>{
    return(
        <div className = "scoreboard">
        <Header 
           title="My Scoreboard" 
           totalPlayers={5}
           isFun={true}
        />
        {/* player list */}
        <Player playerName ="Fatemeh" score ={15}/>
        <Player playerName ="Gill" score ={4}/>
        <Player playerName ="Ida" score ={10}/>
        <Player playerName ="Azin" score ={20}/>
        <Player playerName ="Lilla" score ={6}/>
        </div>

    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);