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
      log: ["Fight!"],
      aggressor: "player"
  }

  playerAttack = (abilityID) => {
    // Pull selected ability
    const ability = this.props.player.abilities.find(ability => ability.id === parseInt(abilityID))
    // update fight state
    this.setState(prevState => ({
      players_health: prevState.players_health + ability.healing_effect,
      opponents_health: prevState.opponents_health - ability.damage_effect,
      log: [`${this.props.player.name} used ${ability.name} to ${ability.description} (Damge: ${ability.damage_effect}, Heal: ${ability.healing_effect})`, ...prevState.log],
      aggressor: "opponent"
    }))
    // Call opponent to attack after a short timeout
    setTimeout(this.opponentAttack, 2500)
  }

  opponentAttack = () => {
    // Grab a random ability from the available 3
    const ability = this.props.opponent.abilities[Math.floor(Math.random()*3)]
    // Update fight state
    this.setState(prevState => ({
      players_health: prevState.players_health - ability.damage_effect,
      opponents_health: prevState.opponents_health + ability.healing_effect,
      log: [`${this.props.opponent.name} used ${ability.name} to ${ability.description} (Damge: ${ability.damage_effect}, Heal: ${ability.healing_effect})`, ...prevState.log],
      aggressor: "player"
    }))
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
        <AbilityButtons abilities={this.props.player.abilities} playerAttack={this.playerAttack} aggressor={this.state.aggressor}/>
        <BattleLog log={this.state.log}/>
      </div>
    </div>
    );
  }
}

export default Fight;