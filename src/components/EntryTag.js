import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Tag = styled.div`
  background: #750000;
  border-radius: 5px;
  color: #fefefe;
  max-width: 100px;
  min-width: 50px;
  padding: ${props => props.padding || 1}px;
  margin: 0 5px;
  padding: 11px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: stretch;
  align-self: center;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  hyphens: auto;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.23);
  &.selected {
    background: #ab3a2a;
  }
`

export default class EntryTag extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
  }

  render() {
    const { text, onClick, selected, padding } = this.props
    return (
      <Tag
        data-cy="EntryTag"
        onClick={onClick}
        className={selected ? 'selected' : ''}
        padding={padding}
      >
        {text}
      </Tag>
    )
  }
}
