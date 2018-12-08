import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonEl = styled.button`
  background: #${props => props.background || '2196f3'};
  border: none;
  border-radius: 5px;
  padding: 0 9px 13px 9px;
  margin: 0 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.23);
  color: #000;
  font-size: ${props => props.fontSize || 12}px;
  font-family: Gloria Hallelujah;
  height: ${props => props.height || 20}px;
  display: flex;
  align-items: center;
  justify-content: center;
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
