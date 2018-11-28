import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'

import JournalCard from './JournalCard'
import EntryTag from './EntryTag'
import Separator from './Separator'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const ListItem = styled.li`
  grid-column: 1 / -1;
  font-size: 18px;
  color: rgb(0, 15, 85);
`

export default class App extends Component {
  state = {
    addingEntry: false,
    editEntry: false,
    entryTexts: ['hi friends'],
    entryTextsNew: [
      {
        text:
          'I was working a bit. The sensation i felt could be described as an energizing process of true happyfication.',
        task: 'work',
        energy: 'energized',
        mood: 'happy'
      }
    ],
    tasks: [
      {
        text: 'work',
        selected: false,
        id: uid(),
        time: true,
        amount: false,
        mood: true,
        energy: true
      },
      {
        text: 'eat',
        selected: false,
        id: uid(),
        time: false,
        amount: true,
        mood: false,
        energy: true
      },
      {
        text: 'sleep',
        selected: false,
        id: uid(),
        time: true,
        amount: false,
        mood: true,
        energy: true
      },
      {
        text: 'sport',
        selected: false,
        id: uid(),
        time: true,
        amount: true,
        mood: true,
        energy: true
      }
    ],

    amount: [
      { text: 'a bit', selected: false, id: uid() },
      { text: 'some', selected: false, id: uid() },
      { text: 'a lot', selected: false, id: uid() }
    ],

    energy: [
      { text: 'energized', selected: false, id: uid() },
      { text: 'normal', selected: false, id: uid() },
      { text: 'tired', selected: false, id: uid() }
    ],

    mood: [
      { text: 'happy', selected: false, id: uid() },
      { text: 'neutral', selected: false, id: uid() },
      { text: 'unhappy', selected: false, id: uid() }
    ]
  }

  daysArray = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag'
  ]

  render() {
    return (
      <Wrapper>
        <JournalCard
          addingEntry={this.state.addingEntry}
          day={this.getDay()}
          date={new Date()}
          data={this.props.state}
          editEntry={this.state.editEntry}
          handleSubmit={this.handleSubmit}
          renderJournalTexts={this.renderJournalTexts}
          renderAmount={this.renderAmount}
          renderEnergy={this.renderEnergy}
          renderMood={this.renderMood}
          renderTasks={this.renderTasks}
          toggleEntryWindow={this.toggleEntryWindow}
        />
      </Wrapper>
    )
  }

  getDay() {
    const dayIndex = new Date().getDay()
    return this.daysArray[dayIndex]
  }

  renderAnyTags(type, typeName) {
    return type.map(item => (
      <EntryTag
        text={item.text}
        selected={item.selected}
        onClick={() => this.selectClickedTag(item.id, type, typeName)}
        key={item.id}
      />
    ))
  }

  renderAmount = () => {
    const selectedTask = this.state.tasks.find(task => task.selected === true)
    if (selectedTask == null) {
      return null
    } else {
      if (selectedTask.amount === true)
        return (
          <React.Fragment>
            <Separator text="Amount" />
            {this.renderAnyTags(this.state.amount, 'amount')}
          </React.Fragment>
        )
    }
  }

  renderEnergy = () => {
    const selectedTask = this.state.tasks.find(task => task.selected === true)
    if (selectedTask == null) {
      return null
    } else {
      if (selectedTask.energy === true)
        return (
          <React.Fragment>
            <Separator text="Energy" />
            {this.renderAnyTags(this.state.energy, 'energy')}
          </React.Fragment>
        )
    }
  }

  renderMood = () => {
    const selectedTask = this.state.tasks.find(task => task.selected === true)
    if (selectedTask == null) {
      return null
    } else {
      if (selectedTask.mood === true)
        return (
          <React.Fragment>
            <Separator text="Mood" />
            {this.renderAnyTags(this.state.mood, 'mood')}
          </React.Fragment>
        )
    }
  }

  renderTasks = () => {
    return this.renderAnyTags(this.state.tasks, 'tasks')
  }

  handleSubmit = () => {
    const task = this.state.tasks.find(item => item.selected === true)
    const amount = this.state.amount.find(item => item.selected === true)
    const energy = this.state.energy.find(item => item.selected === true)
    const mood = this.state.mood.find(item => item.selected === true)

    const entry = { task: task, amount: amount, energy: energy, mood: mood }

    this.toggleEntryWindow()
    this.addJournalText(entry)
  }

  toggleEntryWindow = () => {
    this.setState({
      addingEntry: !this.state.addingEntry
    })
  }

  addJournalText = entry => {
    if (entry.task != null) {
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

      console.log(newEntryText)

      this.setState({
        entryTexts: [...this.state.entryTexts, newEntryText]
      })
    }
  }

  renderJournalTexts = () => {
    return this.state.entryTexts.map((text, index) => (
      <ListItem key={index}>{text}</ListItem>
    ))
  }

  selectClickedTag(id, type, typeName) {
    const indexNew = type.findIndex(task => task.id === id)
    const indexOld = type.findIndex(task => task.selected === true)
    let newArray

    if (indexOld >= 0) {
      newArray = [
        ...type.slice(0, indexOld),
        { ...type[indexOld], selected: false },
        ...type.slice(indexOld + 1)
      ]
    } else {
      newArray = type
    }

    newArray = [
      ...newArray.slice(0, indexNew),
      { ...newArray[indexNew], selected: true },
      ...newArray.slice(indexNew + 1)
    ]

    this.stateUpdateSelector(typeName, newArray)
  }

  stateUpdateSelector(typeName, newArray) {
    if (typeName === 'tasks')
      this.setState({
        tasks: newArray
      })
    else if (typeName === 'amount')
      this.setState({
        amount: newArray
      })
    else if (typeName === 'energy')
      this.setState({
        energy: newArray
      })
    else
      this.setState({
        mood: newArray
      })
  }
}
