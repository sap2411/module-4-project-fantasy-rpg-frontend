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
      <BouncyDiv className="d-flex justify-content-md-center">
        <div className="card" style={{width: "40rem"}}>
        <img className="card-img-top" alt="Rematch" src='https://static.miraheze.org/crappygameswiki/5/52/Game_Over.jpg' />
        <button className="btn btn-danger btn-lg mx-4" onClick={() => props.handleClick()}>REMATCH</button>
        </div>
      </BouncyDiv>
      );
}

const VictoryAnimation = (props) => {

    
  return(
    <BouncyDiv className="d-flex justify-content-md-center">
      <div className="card" style={{width: "40rem"}}>
      <img className="card-img-top" alt="Victory!" src='https://www.verrado.com/wp-content/uploads/2013/11/grid-title-victory.jpg' />
      <button className="btn btn-success btn-lg mx-4" onClick={() => props.handleClick()}>NEXT MOD</button>
      </div>
    </BouncyDiv>
    );
  
}

export { FightAnimation, GameOverAnimation, VictoryAnimation };

//