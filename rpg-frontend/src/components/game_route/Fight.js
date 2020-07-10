import React, { Component } from "react";
import AbilityButtons from './AbilityButtons';
import CharacterCard from './CharacterCard.js';
import BackCard from "./BackCard.js";
import BattleLog from './BattleLog.js';
import { GameOverAnimation, VictoryAnimation, Colton, EndGame } from './ReactAnimations.js';
import { jello, wobble } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const jelloAnimation = keyframes`${jello}`;

const JellyDiv = styled.div`
animation: 1s ${jelloAnimation} 1;
`;

const wobbleAnimation = keyframes`${wobble}`;

const WobblyDiv = styled.div`
animation: 1.5s ${wobbleAnimation} 1;
`;

class Fight extends Component {
  
  state = {
      playerBack: false,
      opponentBack: false,
      players_health: this.props.player.health,
      opponents_health: this.props.opponent_health,
      log: ["Fight!"],
      aggressor: "player",
      disable: null
  }

  playerJellyAnimation = () => {
    console.log(this.state.aggressor)
    if (this.state.aggressor === "player"){
      return <JellyDiv><CharacterCard healthLeft={this.state.players_health} character={this.props.player} handleDivClick={this.onPlayerClick} /></JellyDiv>
    }
    return <CharacterCard healthLeft={this.state.players_health} character={this.props.player} handleDivClick={this.onPlayerClick} />
  }

  opponentWobblyAnimation = () => {
    console.log(this.state.aggressor)
    if (this.state.aggressor === "player"){
      return <WobblyDiv><CharacterCard healthLeft={this.state.opponents_health}  character={this.props.opponent} handleDivClick={this.onOpponentClick} /></WobblyDiv>
    }
    return <CharacterCard healthLeft={this.state.opponents_health}  character={this.props.opponent} handleDivClick={this.onOpponentClick} />
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
      aggressor: "opponent",
      disable: ability
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
    if (this.state.opponents_health === 0 && this.props.round == 4) return (<Colton handleClick={this.handleVictory}/>)
    if (this.state.opponents_health === 0 && this.props.round < 4) return (<VictoryAnimation handleClick={this.handleVictory}/>);
    if (this.state.opponents_health === 0 && this.props.round == 5) return (<EndGame handleClick={this.handleVictory}/>);
    return (
      <div className="row d-flex justify-content-md-center">
        <div className="col-4 text-center" >
          {this.state.playerBack ? <BackCard  character={this.props.player} handleDivClick={this.onPlayerClick} /> : this.playerJellyAnimation()}
        </div>
        <div className="col-1 text-center">
          <h3>VS</h3>
        </div>
        <div className="col-4 text-center">
          {this.state.opponentBack ? <BackCard  character={this.props.opponent} handleDivClick={this.onOpponentClick} /> : this.opponentWobblyAnimation()}
        </div>
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
    <div className="container col-8">
      {this.props.round === 5 ? <h1 className='col text-center'>MOD 5 - INSTRUCTOR FIGHT</h1> : <h1 className='col text-center'>MOD {this.props.round}</h1>}
      {this.whoWon()}
      <div className="row justify-content-md-center my-4">
        <AbilityButtons disable={this.state.disable} abilities={this.props.player.abilities} playerAttack={this.playerAttack} aggressor={this.state.aggressor}/>
      </div>
      <div className="row justify-content-md-center">
        <BattleLog log={this.state.log}/>
      </div>
    </div>
    );
  }
}

export default Fight;