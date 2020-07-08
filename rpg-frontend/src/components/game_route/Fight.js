import React, { Component } from "react";
import AbilityButtons from './AbilityButtons';



class Fight extends Component {
  
  state = {
      players_health: this.props.player.health,
      opponents_health: this.props.opponent.health,
      log: "Fight!"
  }

  playerAttack = (abilityID) => {
    const ability = this.props.player.abilities.find(ability => ability.id === parseInt(abilityID))
    this.setState(prevState => ({
      players_health: prevState.players_health + ability.healing_effect,
      opponents_health: prevState.opponents_health - ability.damage_effect,
      log: `${this.props.player.name} used ${ability.name} to ${ability.descrription}`
    }))
  }

  opponentAttack = () => {

  }

 
  render() {
    return (
    <div>
      <h1>Round 1</h1>
      <h2>{this.props.player.name}</h2>
      <h3>Versus</h3>
      <h2>{this.props.opponent.name}</h2>
      <AbilityButtons abilities={this.props.player.abilities} playerAttack={this.playerAttack}/>
    </div>
    );
  }
}

export default Fight;