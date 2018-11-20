import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonEl = styled.button`
  background: yellow;
`

export default class Button extends Component {
  render() {
    const { text, onClick } = this.props
    return <ButtonEl onClick={onClick}>{text}</ButtonEl>
  }
}
