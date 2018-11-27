import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background: ${props => props.background || 'transparent'};
  grid-column: 1 / -1;
`

const Text = styled.span`
  white-space: nowrap;
`

const Line = styled.div`
  width: 100%;
  margin: 0 10px;
  border-bottom: ${props => props.width || 1}px solid #ccc;
  grid-column: 1 / -1;
`

export default class Separator extends Component {
  render() {
    return (
      <Wrapper data-cy="Separator">
        <Line />
        <Text>{this.props.text}</Text>
        <Line />
      </Wrapper>
    )
  }
}
