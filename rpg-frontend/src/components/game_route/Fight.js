import React, { Component } from "react";
import AbilityButtons from './AbilityButtons';
import CharacterCard from './CharacterCard.js';
import BackCard from "./BackCard.js";
import BattleLog from './BattleLog.js';
import { HealAnimation, GameOverAnimation, VictoryAnimation } from './ReactAnimations.js';


class Fight extends Component {
  
  state = {
      playerBack: false,
      opponentBack: false,
      players_health: this.props.player.health,
      opponents_health: this.props.opponent_health,
      log: ["Fight!"],
      aggressor: "player"
  }

  playerAttack = (abilityID) => {
    console.log(this.props.opponent.health)
    // Pull selected ability
    if (this.state.players_health > 0){
    const ability = this.props.player.abilities.find(ability => ability.id === parseInt(abilityID))
    // update fight state
    this.setState(prevState => ({
      players_health: prevState.players_health + ability.healing_effect <= this.props.player.health ? prevState.players_health + ability.healing_effect : this.props.player.health,
      opponents_health: prevState.opponents_health - ability.damage_effect >= 0 ? prevState.opponents_health - ability.damage_effect : 0,
      log: [this.props.player.name + this.abilityLogMessage(ability), ...prevState.log],
      aggressor: "opponent"
    }))
    // Call opponent to attack after a short timeout
    setTimeout(this.opponentAttack, 500)
  }
  }

  opponentAttack = () => {
    // Grab a random ability from the available 3
    if (this.state.opponents_health > 0){
    const ability = this.props.opponent.abilities[Math.floor(Math.random()*3)]
    // Update fight state
    this.setState(prevState => ({
      players_health: prevState.players_health - ability.damage_effect >= 0 ? prevState.players_health - ability.damage_effect : 0,
      opponents_health: prevState.opponents_health + ability.healing_effect <= this.props.opponent.health ? prevState.opponents_health + ability.healing_effect : this.props.opponent.health,
      log: [this.props.opponent.name + this.abilityLogMessage(ability), ...prevState.log],
      aggressor: "player"
    }))
    }
  }

  abilityLogMessage = (ability) => {
    return (` used ${ability.name} to ${ability.description}. (Damge: ${ability.damage_effect}, Heal: ${ability.healing_effect})`)
  }

  onPlayerClick = (arg=false) => {
    this.setState({playerBack: arg})
  }

  onOpponentClick = (arg=false) => {
    this.setState({opponentBack: arg})
  }

  whoWon = () => {
    if (this.state.players_health === 0) return (<GameOverAnimation handleClick={this.handleRematch}/>);
    if (this.state.opponents_health === 0) return (<VictoryAnimation handleClick={this.handleVictory}/>);
    return (
      <div className='ui two column centered grid'>
        {this.state.playerBack ? <BackCard  character={this.props.player} handleDivClick={this.onPlayerClick} /> : <CharacterCard healthLeft={this.state.players_health} character={this.props.player} handleDivClick={this.onPlayerClick} />}
        <h3>VS</h3>
        {this.state.opponentBack ? <BackCard  character={this.props.opponent} handleDivClick={this.onOpponentClick} /> : <CharacterCard healthLeft={this.state.opponents_health}  character={this.props.opponent} handleDivClick={this.onOpponentClick} />}
      </div>
    )
  }


  handleVictory = () => {
    this.props.advanceRound()
    this.setState({
      playerBack: false,
      opponentBack: false,
      players_health: this.props.player.health,
      opponents_health: 150,
      log: ["Fight!"],
      aggressor: "player"
    })
  }

  handleRematch = () => {
    this.setState({
      playerBack: false,
      opponentBack: false,
      players_health: this.props.player.health,
      opponents_health: this.props.opponent.health,
      log: ["Fight!"],
      aggressor: "player"
    })
  }
 
  render() {
    return (
    <div>
      {this.state.round == 5 ? <h1 className='col text-center'>MOD 5 - INSTRUCTOR FIGHT</h1> : <h1 className='col text-center'>MOD {this.props.round}</h1>}
      {this.whoWon()}
      <div className='ui two column centered grid'>
        <AbilityButtons abilities={this.props.player.abilities} playerAttack={this.playerAttack} aggressor={this.state.aggressor}/>
        <BattleLog log={this.state.log}/>
      </div>
    </div>
    );
  }
}

export default Fight;