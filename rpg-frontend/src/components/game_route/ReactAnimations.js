import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation} infinite;
`;
export default class ReactAnimations extends Component {
    render(){
        return(
        <BouncyDiv><i className="icon large circular red heartbeat" /></BouncyDiv>
        );
    }
}

//