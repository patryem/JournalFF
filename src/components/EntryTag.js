import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Tag = styled.div`
  background: #7aa8bf;
  border-radius: 5px;
  color: #333;
  max-width: 100px;
  min-width: 50px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  font-size: 20px;
  box-shadow: 0 6px 12px rgba(10, 10, 13, 0.12);
  &.selected {
    background: #deffff;
  }
`

export default class EntryTag extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
  }

  render() {
    const { text, onClick, selected } = this.props
    return (
      <Tag
        data-cy="EntryTag"
        onClick={onClick}
        className={selected ? 'selected' : ''}
      >
        {text}
      </Tag>
    )
  }
}
