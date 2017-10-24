import React, { Component } from 'react'
import styled from 'styled-components';
import colors from '../styles/colors';

const Wrapper = styled.div`
  height: 90px;
  padding: 0 15px;
  background: white;
  color: black;
  font-size: 36px;
  font-weight: 800;
  position: relative;

  span {
    position: absolute;
    bottom: -1px;
    left: 15px;
  }
`;

export default class Bar extends Component {
  render() {
    return (
      <Wrapper>
        <span>Relax</span>
      </Wrapper>
    )
  }
}
