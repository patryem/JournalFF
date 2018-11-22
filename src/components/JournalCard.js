import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'

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
  state = {
    addingEntry: false,
    entryTexts: ['Work for 2 hours', 'Eat a bagle']
  }

  handleSubmit = entry => {
    this.toggleEntryWindow()
    entry != null ? this.addJournalText(entry) : console.log('No Entry added')
  }

  toggleEntryWindow = () => {
    this.setState({
      addingEntry: !this.state.addingEntry
    })
  }

  addJournalText = entry => {
    let newEntryText = ''
    entry.forEach(entryobject => {
      if (entryobject != null)
        newEntryText = newEntryText + ` ` + entryobject.text
    })

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
      <Wrapper>
        <Header>
          <span>{day}</span>
          <span>{date.toLocaleDateString('de')}</span>
        </Header>
        <ul>{this.renderJournalText()}</ul>
        {this.state.addingEntry ? (
          <EntryWindow onClick={entry => this.handleSubmit(entry)} />
        ) : (
          <Button text="new Entry" onClick={this.toggleEntryWindow} />
        )}
      </Wrapper>
    )
  }
}
