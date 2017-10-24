import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResultItem from './result-item';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    z-index: 101;

    background: -webkit-linear-gradient(top, rgba(255,255,255,0), white);
    background: -o-linear-gradient(top, rgba(255,255,255,0), white);
    background: -moz-linear-gradient(top, rgba(255,255,255,0), white);
    background: linear-gradient(to top, rgba(255,255,255,0), white);
  }

  .contents {
    position: relative;
    z-index: 100;
    height: calc(100% - 160px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 15px;
  }

  .videoplayer {
    z-index: 101;
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 211px;
    background: rgba(0,0,0,0.8);
    color: white;
    display: none;
  }
`;

export default class Results extends Component {

  render() {
    const {data} = this.props;

    return (
      <Wrapper>
        <div className="shadow"></div>

        <div className="contents">
          { data.map(item => <ResultItem key={item.id} data={item} />) }
        </div>

        <div className="videoplayer">
          videoplayer
        </div>

      </Wrapper>
    )
  }
}


Results.propType = {
  data: PropTypes.array.isRequired
}