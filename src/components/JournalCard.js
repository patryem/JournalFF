import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import EntryWindow from './EntryWindow'
import Button from './Button'

const Wrapper = styled.section`
  width: 90vw;
  min-height: 80vh;
  background: #efefef;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 50px auto;
`

const CardNav = styled.section`
  box-sizing: border-box;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
`

const Header = styled.h1`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 10px;
  font-size: 24px;
  background: #abdaf2;
  color: #333;
`

const ListItem = styled.li`
  grid-column: 1 / -1;
  font-size: 18px;
  color: rgb(0, 15, 85);
`

export default class JournalCard extends Component {
  static propTypes = {
    day: PropTypes.string,
    date: PropTypes.object
  }

  static defaultProps = {
    day: 'Today'
  }

  state = {
    addingEntry: false,
    entryTexts: [
      {
        text:
          'I was working a bit. The sensation i felt could be described as an energizing process of true happyfication.',
        task: 'work',
        energy: 'energized',
        mood: 'happy'
      }
    ]
  }

  handleSubmit = entry => {
    this.toggleEntryWindow()
    if (entry.task != null) this.addJournalText(entry)
  }

  toggleEntryWindow = () => {
    this.setState({
      addingEntry: !this.state.addingEntry
    })
  }

  addJournalText = entry => {
    let newEntryText = `I did `

    if (entry.amount != null) {
      newEntryText = newEntryText + entry.amount.text
    }

    newEntryText = newEntryText + ` ` + entry.task.text + `ing `

    if (entry.mood != null && entry.energy != null) {
      newEntryText =
        newEntryText +
        `and feel ` +
        entry.mood.text +
        ` and ` +
        entry.energy.text
    } else if (entry.mood != null) {
      newEntryText = newEntryText + `and feel ` + entry.mood.text
    } else if (entry.energy != null) {
      newEntryText = newEntryText + `and feel ` + entry.energy.text
    }

    this.setState({
      entryTexts: [...this.state.entryTexts, { text: newEntryText, ...entry }]
    })
  }

  renderJournalTexts() {
    return this.state.entryTexts.map((text, index) => (
      <ListItem key={index}>{text.text}</ListItem>
    ))
  }

  render() {
    const { day, date } = this.props
    return (
      <Wrapper data-cy="JournalCard">
        <Header data-cy="Date">
          <span>{day}</span>
          <span>{date.toLocaleDateString('de')}</span>
        </Header>
        <ul>{this.renderJournalTexts()}</ul>
        {this.state.addingEntry ? (
          <EntryWindow onClick={entry => this.handleSubmit(entry)} />
        ) : (
          <CardNav>
            <Button text="New Entry" onClick={this.toggleEntryWindow} />
            <Button text="Edit" onClick={this.toggleEntryWindow} />
          </CardNav>
        )}
      </Wrapper>
    )
  }
}
