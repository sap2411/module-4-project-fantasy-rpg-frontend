import React, { Component } from "react";
import CharacterCard from './CharacterCard.js';
import BackCard from "./BackCard.js";
import BattleLog from './BattleLog.js';


class Fight extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        playerBack: false,
        opponentBack: false,
        log: [`${this.props.player.name} used ${this.props.player.abilities[0].name} and damaged ${this.props.opponent.name} for 25 Health`],
        players_health: this.props.player.health,
        opponents_health: this.props.opponent.health
    }
  }

  onPlayerClick = (arg=false) => {
    this.setState({playerBack: arg})
  }

  onOpponentClick = (arg=false) => {
    this.setState({opponentBack: arg})
  }
 
  render() {
    return (
    <div>
      <h1 className='col text-center'>Mod 1</h1>
      <div className='ui two column centered grid'>
        {this.state.playerBack ? <BackCard  character={this.props.player} handleDivClick={this.onPlayerClick} /> : <CharacterCard healthLeft={this.state.players_health} character={this.props.player} handleDivClick={this.onPlayerClick} />}
        <h3>VS</h3>
        {this.state.opponentBack ? <BackCard  character={this.props.opponent} handleDivClick={this.onOpponentClick} /> : <CharacterCard healthLeft={this.state.opponents_health}  character={this.props.opponent} handleDivClick={this.onOpponentClick} />}
      </div>
      <div className='ui two column centered grid'>
          <div className='buttons'>
            <button><i className="icon large circular yellow lightning" /></button>
            <button><i className="icon large circular red heartbeat" /></button>
            <button><i className="icon large circular blue star" /></button>
          </div>
          <BattleLog log={this.state.log}/>
      </div>

    </div>
    );
  }
}

export default Fight;