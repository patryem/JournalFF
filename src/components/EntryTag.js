import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
