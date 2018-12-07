import React, { Component } from 'react'
import styled from 'styled-components'

import InfoBox from './InfoBox'
import Icon from './Icon'
import Option from './Option'

const Wrapper = styled.section`
  width: 340px;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
`

const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
`

const Footer = styled.footer`
  transition: all 0.1s ease;
  display: flex;
  height: 64px;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  &.active {
    height: auto;
  }
`

const TaskBox = styled.div`
  text-align: center;
  width: 150px;
  font-size: 30px;
  margin: 0 10px;
`

const TimeBox = styled.div`
  font-size: 20px;
  padding: 5px 0;
  margin: 5px 0;
  line-height: 0.9;
`

export default class EntryCard extends Component {
  render() {
    const { task, energy, time } = this.props

    return (
      <Wrapper>
        <Header>
          <TaskBox>{task}</TaskBox>
          <Icon backgroundNumber={2} />
          <Icon backgroundNumber={5} />
          <Icon backgroundNumber={8} />
          <TimeBox>
            {time} <br /> min
          </TimeBox>
          <Option />
        </Header>
        <Footer>
          <InfoBox>
            <span>x</span> {energy}
          </InfoBox>
          <InfoBox>
            <span>x</span> {energy}
          </InfoBox>
          <InfoBox>
            <span>x</span> {energy}
          </InfoBox>
        </Footer>
      </Wrapper>
    )
  }
  renderInfos() {}
}
