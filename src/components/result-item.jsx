import React, { Component } from 'react'
import styled from 'styled-components';
import colors from '../styles/colors';

const Wrapper = styled.div`
  background: white;
  margin-bottom: 15px;
  height: 90px;
  overflow: hidden;
  width: 100%;
  max-width: 500px;

  &:last-child {
    margin-bottom: 0;
  }

  .left {
    float: left;
    width: 90px;
    height: 90px;

    background-color: purple;
    background-blend-mode: overlay;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .right {
    float: left;
    width: calc(100% - 110px);
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    height: 100%;

    strong {
      margin-top: -1px;
      align-self: center;
      width: 90%;
      font-size: 15px;
      line-height: 15px;
      font-weight: 700;
    }
  }
`;

export default class ResultItem extends Component {
  constructor(props){
    super(props);

    this.play = this.play.bind(this);
  }

  play(event) {
    console.log('play', this.props.data.id, this.props.data.link);
    alert(this.props.data.id);
  }

  render() {
    const {
      channelId,
      channelTitle,
      description,
      id,
      kind,
      link,
      publishedAt,
      thumbnails,
      title
    } = this.props.data;

    return (
      <Wrapper onClick={this.play}>
        <div className="left" style={{backgroundImage: 'url(' + thumbnails.default.url +  ')'}}></div>
        <div className="right">
          <strong>{title}</strong>
        </div>
      </Wrapper>
    )
  }
}
