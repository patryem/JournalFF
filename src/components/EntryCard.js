import React, { Component } from 'react'
import styled from 'styled-components'

import InfoBox from './InfoBox'
import Icon from './Icon'
import Option from './Option'

const Wrapper = styled.section`
  width: 85vw;
  max-height: 160px;
  border-radius: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.23);
  position: relative;
  margin-bottom: 10px;
  background: rgb(245, 245, 245);
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  display: flex;
  align-items: center;
`

const Footer = styled.footer`
  transition: all 0.2s ease;
  display: flex;
  max-height: 0;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  &.active {
    max-height: 100px;
  }
`

const TaskBox = styled.div`
  width: 120px;
  font-size: 25px;
  height: auto;
  margin: 10px;
  line-height: 19px;
  text-align: center;
  hyphens: auto;
  justify-self: flex-start;
`

const TimeBox = styled.div`
  font-size: 20px;
  padding: 5px 0;
  margin: 5px;
  line-height: 0.9;
`

export default class EntryCard extends Component {
  state = {
    active: false
  }

  render() {
    return (
      <Wrapper onClick={this.toggleActive}>
        <Header>
          <TaskBox>{this.getTask()}</TaskBox>
          {this.renderIcons()}
          <TimeBox>
            {150} <br /> min
          </TimeBox>
          <Option />
        </Header>
        <Footer className={this.state.active ? 'active' : ''}>
          {this.renderInfos()}
        </Footer>
      </Wrapper>
    )
  }
  getTask() {
    return this.props.data.map(entry => entry.tasks && entry.tasks)
  }

  renderIcons() {
    return this.props.data.map(
      entry => entry.icon && <Icon backgroundNumber={entry.icon} />
    )
  }

  renderInfos() {
    return this.props.data.map(
      entry =>
        entry.icon && (
          <InfoBox backgroundNumber={entry.icon} typeText={entry.text} />
        )
    )
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    })
  }
}
