import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 200px;
  height: 250px;
  background: rgba(111, 111, 124, 0.8);
  padding: 10px;
  box-sizing: border-box;
`

export default class EntryWindow extends Component {
  render() {
    return <Wrapper />
  }
}
