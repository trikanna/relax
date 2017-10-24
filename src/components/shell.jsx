import React, { Component } from 'react'
import styled from 'styled-components';
import colors from '../styles/colors';

import Bar from './bar';
import Search from './search';
import Results from './results';

const Wrapper = styled.div`
  background: #fcfcfc;
  background: white;
  height: 100%;
`;

export default class Shell extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }

    this.showResults = this.showResults.bind(this);
  }

  showResults(data) {
    console.log('??', data);
    this.setState({data})
  }

  render() {
    return (
      <Wrapper>
        <Bar />
        <Search showResults={this.showResults} />
        <Results data={this.state.data} />
      </Wrapper>
    )
  }
}
