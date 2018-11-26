import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'
import PropTypes from 'prop-types'

import Button from './Button'
import EntryTag from './EntryTag'

const Wrapper = styled.section`
  width: 85vw;
  height: 250px;
  background: #fefefe;
  box-shadow: 0 3px 5px 0 #ccc;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`

export default class EntryWindow extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  state = {
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

  renderTasks = () => {
    return this.renderTags(this.state.tasks, 'tasks')
  }

  renderAmount() {
    const selectedTask = this.state.tasks.find(task => task.selected === true)
    if (selectedTask == null) {
      return null
    } else {
      if (selectedTask.amount === true)
        return this.renderTags(this.state.amount, 'amount')
    }
  }

  renderEnergy() {
    const selectedTask = this.state.tasks.find(task => task.selected === true)
    if (selectedTask == null) {
      return null
    } else {
      if (selectedTask.energy === true)
        return this.renderTags(this.state.energy, 'energy')
    }
  }

  renderMood() {
    const selectedTask = this.state.tasks.find(task => task.selected === true)
    if (selectedTask == null) {
      return null
    } else {
      if (selectedTask.mood === true)
        return this.renderTags(this.state.mood, 'mood')
    }
  }

  renderTags(type, typeName) {
    return type.map(item => (
      <EntryTag
        text={item.text}
        selected={item.selected}
        onClick={() => this.selectClickedTag(item.id, type, typeName)}
        key={item.id}
      />
    ))
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

  getEntry = () => {
    const task = this.state.tasks.find(item => item.selected === true)
    const amount = this.state.amount.find(item => item.selected === true)
    const energy = this.state.energy.find(item => item.selected === true)
    const mood = this.state.mood.find(item => item.selected === true)

    const entry = { task: task, amount: amount, energy: energy, mood: mood }

    return entry
  }

  render() {
    const { onClick } = this.props
    return (
      <Wrapper data-cy="EntryWindow">
        {this.renderTasks()}
        {this.renderAmount()}
        {this.renderEnergy()}
        {this.renderMood()}
        <Button text="Submit" onClick={() => onClick(this.getEntry())} />
      </Wrapper>
    )
  }
}
