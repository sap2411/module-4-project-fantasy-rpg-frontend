import React, { Component } from "react";
import AbilityButtons from './AbilityButtons';
import CharacterCard from './CharacterCard.js';
import BackCard from "./BackCard.js";
import BattleLog from './BattleLog.js';


class Fight extends Component {
  
  state = {
      playerBack: false,
      opponentBack: false,
      players_health: this.props.player.health,
      opponents_health: this.props.opponent.health,
      log: ["Fight!"]
  }

  playerAttack = (abilityID) => {
    const ability = this.props.player.abilities.find(ability => ability.id === parseInt(abilityID))
    this.setState(prevState => ({
      players_health: prevState.players_health + ability.healing_effect,
      opponents_health: prevState.opponents_health - ability.damage_effect,
      log: [...this.state.log,`${this.props.player.name} used ${ability.name} to ${ability.descrription}`]
    }))
  }

  opponentAttack = () => {
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
        <AbilityButtons abilities={this.props.player.abilities} playerAttack={this.playerAttack}/>
        <BattleLog log={this.state.log}/>
      </div>

    </div>
    );
  }
}

export default Fight;