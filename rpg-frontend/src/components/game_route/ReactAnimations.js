import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce, shake} from 'react-animations';
import Swords from '../../assets/swords.png';

const bounceAnimation = keyframes`${bounce}`;

const shakeAnimation = keyframes`${shake}`;

const ShakyDiv = styled.div`
animation: 3s ${shakeAnimation} infinite;
`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;
class FightAnimation extends Component {
    render(){
        return(
        <ShakyDiv><img width={100} hieght={100} src={Swords} alt='woops' /></ShakyDiv>
        );
    }
}

const GameOverAnimation = (props) => {
    
  
  return(
      <BouncyDiv>
        <div className="ui segment">
        <img className="card-img-top" alt="oh no!" src='https://static.miraheze.org/crappygameswiki/5/52/Game_Over.jpg' />
        <button onClick={() => props.handleClick()}>REMATCH</button>
        </div>
      </BouncyDiv>
      );
}

const VictoryAnimation = (props) => {

    
  return(
    <div>
      <BouncyDiv >
        <div  className="ui segment">
        <img  className="card-img-top" alt="oh no!" src='https://www.verrado.com/wp-content/uploads/2013/11/grid-title-victory.jpg' />
        <button onClick={() => props.handleClick()}>NEXT MOD</button>
        </div>
      </BouncyDiv><br/>
      </div>
    );
  
}

export { FightAnimation, GameOverAnimation, VictoryAnimation };

//