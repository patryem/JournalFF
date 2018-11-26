import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonEl = styled.button`
  background: #750000;
  border: none;
  border-radius: 2px;
  padding: 5px;
  box-shadow: 0px 1px 2px rgba(111, 111, 124, 0.8);
  color: #eee;
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
