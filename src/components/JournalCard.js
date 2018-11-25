import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'
import PropTypes from 'prop-types'

import EntryWindow from './EntryWindow'
import Button from './Button'

const Wrapper = styled.section`
  width: 250px;
  height: 400px;
  background: rgb(248, 236, 194);
  padding: 10px;
  box-sizing: border-box;
`

const Header = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #333;
  display: flex;
  justify-content: space-around;
`

const ListItem = styled.li`
  font-size: 18px;
  color: rgb(0, 15, 85);
`

export default class JournalCard extends Component {
  static propTypes = {
    day: PropTypes.string,
    date: PropTypes.string
  }

  static defaultProps = {
    day: 'Today'
  }

  state = {
    addingEntry: false,
    entryTexts: ['Work for 2 hours', 'Eat a bagle']
  }

  handleSubmit = entry => {
    this.toggleEntryWindow()
    entry.task != null
      ? this.addJournalText(entry)
      : console.log('No Entry added')
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
      entryTexts: [...this.state.entryTexts, newEntryText]
    })
  }

  renderJournalText() {
    return this.state.entryTexts.map(text => (
      <ListItem key={uid()}>{text}</ListItem>
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
        <ul>{this.renderJournalText()}</ul>
        {this.state.addingEntry ? (
          <EntryWindow onClick={entry => this.handleSubmit(entry)} />
        ) : (
          <Button text="New Entry" onClick={this.toggleEntryWindow} />
        )}
      </Wrapper>
    )
  }
}
