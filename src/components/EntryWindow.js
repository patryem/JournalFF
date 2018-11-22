import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'

import Button from './Button'
import EntryTag from './EntryTag'

const Wrapper = styled.section`
  width: 200px;
  height: 250px;
  background: rgba(111, 111, 124, 0.8);
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: 30px;
  grid-gap: 10px;
`

export default class EntryWindow extends Component {
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

  renderTasks() {
    return this.renderTags(this.state.tasks, 'tasks')
  }

  renderAmount() {
    return this.renderTags(this.state.amount, 'amount')
  }

  renderEnergy() {
    return this.renderTags(this.state.energy, 'energy')
  }

  renderMood() {
    return this.renderTags(this.state.mood, 'mood')
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

  renderSelector() {}

  changeState(typeName, newArray) {
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

    this.changeState(typeName, newArray)
  }

  getTag = () => {
    const findTag = this.state.tasks.find(task => task.selected === true)
    return findTag
  }

  render() {
    const { onClick } = this.props
    return (
      <Wrapper>
        {this.renderTasks()}
        <Button text="Submit" onClick={() => onClick(this.getTag())} />
      </Wrapper>
    )
  }
}
