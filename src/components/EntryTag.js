import React, { Component } from 'react'
import styled from 'styled-components'

const Tag = styled.div`
  background: #555;
  border-radius: 5%;
  color: #eee;
  max-width: 100px;
  text-align: center;
  &.selected {
    background: violet;
  }
`

export default class EntryTag extends Component {
  render() {
    const { text, onClick, selected } = this.props
    return (
      <Tag onClick={onClick} className={selected ? 'selected' : ''}>
        {text}
      </Tag>
    )
  }
}
