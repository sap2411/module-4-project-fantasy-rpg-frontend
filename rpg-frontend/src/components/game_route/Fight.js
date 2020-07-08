import React, { Component } from "react";



class Fight extends Component {
  
  constructor(props){
    super(props)
    this.state = {

    }
  }

 
  render() {
    return (
    <div>
      <h1>Round 1</h1>
      <h2>{this.props.player.name}</h2>
      <h3>Versus</h3>
      <h2>{this.props.opponent.name}</h2>
    </div>
    );
  }
}

export default Fight;