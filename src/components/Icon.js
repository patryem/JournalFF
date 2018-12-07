import React, { Component } from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
 background-repeat: no-repeat;
margin: 0 7px;
  height: 22px;
  width: 22px;
  align-self: center;
  background-image: url("Icons/${props => props.backgroundNumber}.svg");

`

export default class Icon extends Component {
  render() {
    return <IconContainer backgroundNumber={this.props.backgroundNumber} />
  }
}
