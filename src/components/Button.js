import React, { Component } from 'react'
import styled from 'styled-components'

const Buttonll = styled.button`
  background: yellow;
`

export default class Button extends Component {
  render() {
    const { text, onClick } = this.props
    return <Buttonll onClick={onClick}>{text}</Buttonll>
  }
}
