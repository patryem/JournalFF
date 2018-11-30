import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonEl = styled.button`
  background: #${props => props.background || 750000};
  border: none;
  border-radius: 4px;
  padding: ${props => props.fontSize / 2 - 4}px;
  box-shadow: 0 2px 4px rgba(10, 10, 13, 0.12), 0 1px 2px rgba(10, 10, 13, 0.8);
  color: #eee;
  font-size: ${props => props.fontSize || 12}px;
  height: ${props => props.height || 20}px;
`

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { text, onClick, fontSize, background, height } = this.props
    return (
      <ButtonEl
        data-cy="Button"
        onClick={onClick}
        fontSize={fontSize}
        background={background}
        height={height}
      >
        {text}
      </ButtonEl>
    )
  }
}
