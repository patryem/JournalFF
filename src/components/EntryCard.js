import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 340px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`
const Header = styled.header`
  height: 50px;
  display: flex;
`
const Footer = styled.footer`
  transition: all 0.1s ease;
  display: flex;
  height: 0;
  flex-wrap: wrap;
  overflow: hidden;
  &.active {
    height: 50px;
  }
`

export default class EntryCard extends Component {
  render() {
    return <Wrapper />
  }
}
