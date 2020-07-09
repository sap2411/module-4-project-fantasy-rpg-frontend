import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;
class HealAnimation extends Component {
    render(){
        return(
        <BouncyDiv><i className="icon large circular red heartbeat" /></BouncyDiv>
        );
    }
}

const GameOverAnimation = (props) => {
    
  
  return(
      <BouncyDiv>
        <div className="ui segment">
        <img className="card-img-top" alt="oh no!" src='https://previews.123rf.com/images/pockygallery/pockygallery1508/pockygallery150800259/43417431-you-lose-red-stamp-text-on-white.jpg'  />
        <button onClick={() => props.handleClick()}>REMATCH</button>
        </div>
      </BouncyDiv>
      );
}

const VictoryAnimation = (props) => {

    
  return(
      <BouncyDiv >
        <div  className="ui segment">
        <img className="card-img-top" alt="oh no!" src='https://www.verrado.com/wp-content/uploads/2013/11/grid-title-victory.jpg' />
        <button onClick={() => props.handleClick()}>NEXT MOD</button>
        </div>
      </BouncyDiv>
      );
  
}

export { HealAnimation, GameOverAnimation, VictoryAnimation };

//