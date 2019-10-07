
const players = [
    {
    name:"Fafa",
    score:3,
    id:1
},
{
    name:"Aki",
    score:4,
    id:2
},
{
    name:"Lilla",
    score:6,
    id:3
}
]
const Header =(props)=>{
    console.log(props);
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

const App = (props)=>{
    return(
        <div className = "scoreboard">
        <Header 
           title="My Scoreboard" 
           totalPlayers={props.iniPlayers.length}
           isFun={true}
        />
        {/* player list */}
       
        {props.iniPlayers.map(player=>
         <Player playerName ={player.name} score ={player.score} key={player.id}/>
        )}
            
          
        </div>

    );
}

ReactDOM.render(
    <App iniPlayers = {players}/>,
    document.getElementById('root')
);