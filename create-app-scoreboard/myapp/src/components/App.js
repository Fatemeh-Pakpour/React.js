import React from 'react';
import Player from './Player';
import Header from './Header';
// import logo from './logo.svg';
// import './App.css';


class App extends React.Component {
    state ={
        players :[
            {
                name: "Fafa",
                score:0,
                id: 1
              },
              {
                name: "Aki",
                score:0,
                id: 2
              },
              {
                name: "Lilla",
                score:0,
                id: 3
              }
        ]

    }
    handleRemovePlayer=(id)=>{
        this.setState(prevState=>({
            players:prevState.players.filter(player=>player.id !== id)
        }))
    }
    handleScoreChange = (index , delta)=>{
      this.setState(prevState =>({
  
      score: prevState.players[index].score += delta}))
     
     
    
      }
    // handleScoreChange = (index, delta) => {
    //   this.setState( prevState => {
    //     // New 'players' array – a copy of the previous `players` state
    //     const updatedPlayers = [ ...prevState.players ];
    //     // A copy of the player object we're targeting
    //     const updatedPlayer = { ...updatedPlayers[index] };
  
    //     // Update the target player's score
    //     updatedPlayer.score += delta;
    //     // Update the 'players' array with the target player's latest score
    //     updatedPlayers[index] = updatedPlayer;
  
    //     // Update the `players` state without mutating the original state
    //     return {
    //       players: updatedPlayers
    //     };
    //   });
    // }
  
     
    render(){
        return (
            <div className="scoreboard">
              <Header
                title="My Scoreboard"
                totalPlayers={this.state.players.length}
                isFun={true}
              />
              {/* player list */}
        
              {this.state.players.map((player, index) => (
                <Player 
                playerName={player.name} 
                score = {player.score}
                id = {player.id}
                key = {player.id.toString()}
                index = {index}  
                removePlayer={this.handleRemovePlayer} 
                changeScore ={this.handleScoreChange}   
                />
              ))}
            </div>
          );
    }
  
};


export default App;
