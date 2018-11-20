import React, { Component } from 'react'
import styled from 'styled-components'

import JournalCard from './JournalCard'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`

export default class App extends Component {
  daysArray = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'
  ]

  getDate() {
    return new Date().toLocaleDateString('de')
  }

  getDay() {
    const dayIndex = new Date().getDay()
    return this.daysArray[dayIndex]
  }

  render() {
    return (
      <Wrapper>
        <JournalCard day={this.getDay()} date={() => this.getDate()} />
      </Wrapper>
    )
  }
}
