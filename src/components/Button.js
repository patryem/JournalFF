import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonEl = styled.button`
  background: yellow;
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
