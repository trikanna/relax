import React, { Component } from 'react'
import styled from 'styled-components';
import colors from '../styles/colors';
import * as youu from 'youtube-search';
import { DebounceInput } from 'react-debounce-input';

const Wrapper = styled.div`
  height: 70px;
  background: white;
  padding: 5px 15px;
  border-bottom: 1px solid #eee;
  border-bottom: none;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;

  input {
    height: 40px;
    border: none;
    width: 250px;
    border-radius: 3px;
    padding: 5px 10px;
    margin: 0;
    outline: none;
    font-size: inherit;
    background: #eee;
    box-shadow: none;
    border: 1px solid #ddd;
    -webkit-appearance: none;
  }

  button {
    height: 40px;
    padding: 5px 10px;
    margin: 0 0 0 15px;
  }
`;

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);

    this.opts = {
      maxResults: 10,
      key: 'AIzaSyCx70lHJ7eIDIgBG0XrO-URHYaNcEZshKk'
    }
  }

  componentDidMount() {
    youu('relax music chanting', this.opts, (err, results) => {
      if(err) return console.log(err);

      console.dir(results);

      this.props.showResults(results);
    })
  }

  doSearch(str) {

    str += ' relax music chanting';

    youu(str, this.opts, (err, results) => {
      if(err) return console.log(err);

      console.dir(results);

      this.props.showResults(results);
    })

  }

  render() {
    return (
      <Wrapper>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => this.doSearch(event.target.value)} />

        <button>Search</button>
      </Wrapper>
    )
  }
}
