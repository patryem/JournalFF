import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  :hover {
    background: #eee;
  }
`

const Dots = styled.div`
  display: flex;
  height: 18px;
  width: 20px;
  justify-content: center;
  background-image: url('Icons/options.svg');
  background-repeat: no-repeat;
  background-position-x: 7px;
`

export default class Option extends Component {
  render() {
    return (
      <Wrapper>
        <Dots />
      </Wrapper>
    )
  }
}
