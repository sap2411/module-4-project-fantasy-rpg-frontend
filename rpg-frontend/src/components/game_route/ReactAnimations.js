import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import Boss from '../../assets/boss.png';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;


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

const Colton = (props) => {

    
  return(
    <BouncyDiv className="d-flex justify-content-md-center">
      <div className="card" style={{width: "40rem"}}>
      <img className="card-img-top" alt="Victory!" src={Boss} />
      <button className="btn btn-success btn-lg mx-4" onClick={() => props.handleClick()}>FINAL MOD - INSTRUCTOR FIGHT</button>
      </div>
    </BouncyDiv>
    );
  
}

const EndGame = (props) => {

    
  return(
    <BouncyDiv className="d-flex justify-content-md-center">
      <div className="card" style={{width: "40rem"}}>
      <img className="card-img-top" alt="Victory!" src='https://www.verrado.com/wp-content/uploads/2013/11/grid-title-victory.jpg'  />
      <button className="btn btn-success btn-lg mx-4" onClick={() => props.handleClick()}>YOU WIN</button>
      </div>
    </BouncyDiv>
    );
  
}

export { GameOverAnimation, VictoryAnimation, Colton, EndGame };

//