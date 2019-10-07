import React , {Component} from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
    state ={
        players :[
            {
                name: "Fafa",
                id: 1
              },
              {
                name: "Aki",
                id: 2
              },
              {
                name: "Lilla",
                id: 3
              }
        ]

    }
    handleRemovePlayer=(id)=>{
        this.setState(prevState=>({
            players:prevState.players.filter(player=>player.id !== id)
        }))
    }
    render(){
        return (
            <div className="scoreboard">
              <Header
                title="My Scoreboard"
                totalPlayers={this.state.players.length}
                isFun={true}
              />
              {/* player list */}
        
              {this.state.players.map(player => (
                <Player 
                playerName={player.name} 
                id = {player.id}
                key={player.id.toString()} 
                removePlayer={this.handleRemovePlayer}    
                />
              ))}
            </div>
          );
    }
  
};
export default App;


