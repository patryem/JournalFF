import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 150px;
  height: 25px;
  border: 1.5px solid black;
  border-radius: 2px;
  font-size: 20px;
  text-align: center;
`

export default class InfoBox extends Component {
  render() {
    const { typeText, backgroundNumber } = this.props
    return (
      <InfoContainer>
        <Icon backgroundNumber={backgroundNumber} /> {typeText}{' '}
      </InfoContainer>
    )
  }
}
