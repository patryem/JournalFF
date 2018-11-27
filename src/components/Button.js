import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonEl = styled.button`
  background: #750000;
  border: none;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(10, 10, 13, 0.12), 0 1px 2px rgba(10, 10, 13, 0.8);
  color: #eee;
  font-size: 20px;
`

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { text, onClick } = this.props
    return (
      <ButtonEl data-cy="Button" onClick={onClick}>
        {text}
      </ButtonEl>
    )
  }
}
