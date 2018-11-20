import React, { Component } from 'react'
import styled from 'styled-components'

import Button from './Button'

const Wrapper = styled.section`
  width: 200px;
  height: 250px;
  background: rgba(111, 111, 124, 0.8);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class EntryWindow extends Component {
  render() {
    const { onClick } = this.props
    return (
      <Wrapper>
        <Button text="Submit" onClick={onClick} />
      </Wrapper>
    )
  }
}
