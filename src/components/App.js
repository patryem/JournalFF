import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'

import JournalCard from './JournalCard'
import EntryTag, { Tag } from './EntryTag'
import Separator from './Separator'
import Button from './Button'

const Wrapper = styled.section`
  height: 100vh;
  background: #efefef;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const ListItem = styled.li`
  grid-column: 1 / -1;
  font-size: 18px;
  color: rgb(0, 15, 85);
  padding-right: 10px;
  display: flex;
`

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`

export default class App extends Component {
  state = {
    errorMessage: '',
    openEntryWindow: false,
    editEntry: false,
    createNewTask: false,
    editIndex: 0,
    entryTexts: [],
    tasks: [
      {
        text: 'work',
        selected: false,
        id: uid(),
        time: true,
        amount: false,
        mood: true,
        energy: true,
        type: 'tasks'
      },
      {
        text: 'eat',
        selected: false,
        id: uid(),
        time: false,
        amount: true,
        mood: false,
        energy: true,
        type: 'tasks'
      },
      {
        text: 'sleep',
        selected: false,
        id: uid(),
        time: true,
        amount: false,
        mood: true,
        energy: true,
        type: 'tasks'
      },
      {
        text: 'sport',
        selected: false,
        id: uid(),
        time: true,
        amount: true,
        mood: true,
        energy: true,
        type: 'tasks'
      }
    ],

    amount: [
      { text: 'a bit', selected: false, id: uid(), type: 'amount' },
      { text: 'some', selected: false, id: uid(), type: 'amount' },
      { text: 'a lot', selected: false, id: uid(), type: 'amount' }
    ],

    energy: [
      { text: 'energized', selected: false, id: uid(), type: 'energy' },
      { text: 'normal', selected: false, id: uid(), type: 'energy' },
      { text: 'tired', selected: false, id: uid(), type: 'energy' }
    ],

    mood: [
      { text: 'happy', selected: false, id: uid(), type: 'mood' },
      { text: 'neutral', selected: false, id: uid(), type: 'mood' },
      { text: 'unhappy', selected: false, id: uid(), type: 'mood' }
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
          openEntryWindow={this.state.openEntryWindow}
          editEntry={this.state.editEntry}
          errorMessage={this.state.errorMessage}
          createNewTask={this.state.createNewTask}
          day={this.getDay()}
          date={new Date()}
          handleSubmit={this.handleSubmit}
          renderJournalTexts={this.renderJournalTexts}
          renderAmount={() => this.handleRenderTags('amount')}
          renderEnergy={() => this.handleRenderTags('energy')}
          renderMood={() => this.handleRenderTags('mood')}
          renderTasks={this.renderTasks}
          replaceEntry={() => this.replaceEntry(this.state.editIndex)}
          submitNewTask={this.submitNewTask}
          toggleCreateNewTaskWindow={this.toggleCreateNewTaskWindow}
          toggleEntryWindow={this.toggleEntryWindow}
        />
      </Wrapper>
    )
  }

  getDay() {
    const dayIndex = new Date().getDay()
    return this.daysArray[dayIndex]
  }

  renderTags(type, typeName) {
    return type.map(item => (
      <EntryTag
        text={item.text}
        selected={item.selected}
        onClick={() => this.selectClickedTag(item.id, type, typeName)}
        key={item.id}
        padding={8}
      />
    ))
  }

  handleRenderTags = type => {
    const selectedTask = this.state.tasks.find(task => task.selected)
    if (selectedTask && selectedTask[type]) {
      return (
        <React.Fragment>
          <Separator text={type} />
          {this.renderTags(this.state[type], type)}
        </React.Fragment>
      )
    }
  }
  renderTasks = () => {
    return this.renderTags(this.state.tasks, 'tasks')
  }

  handleSubmit = index => {
    const entrys = ['tasks', 'amount', 'energy', 'mood']
      .map(option => {
        return this.state[option].find(item => item.selected === true)
      })
      .filter(item => item)

    this.toggleEntryWindow()

    index < 0 ? this.addJournalText(entrys) : this.addJournalText(entrys, index)
  }

  toggleEntryWindow = () => {
    this.resetTags()
    this.setState({
      openEntryWindow: !this.state.openEntryWindow
    })
  }

  createTextConfig = entrys => {
    return entrys.map(item => {
      return { [item.type]: item.text }
    })
  }

  addJournalText = (entrys, index) => {
    const textConfig = this.createTextConfig(entrys)

    const newEntryText = entrys.map(item => {
      return <Tag key={item.type}>{item.text}</Tag>
    })

    this.state.editEntry
      ? this.setState({
          entryTexts: [
            ...this.state.entryTexts.slice(0, index),
            { text: newEntryText, textConfig },
            ...this.state.entryTexts.slice(index + 1)
          ],
          editEntry: !this.state.editEntry
        })
      : this.setState({
          entryTexts: [
            ...this.state.entryTexts,
            { text: newEntryText, textConfig }
          ]
        })
  }

  renderJournalTexts = () => {
    return this.state.entryTexts.map((text, index) => (
      <ListContainer key={index}>
        <ListItem key={index}>{text.text}</ListItem>
        <Button
          text="Edit"
          onClick={() => this.prepareEdit(index)}
          fontSize={12}
          background="7aa8bf"
        />
      </ListContainer>
    ))
  }

  replaceEntry = index => {
    this.handleSubmit(index)
  }

  submitNewTask = rawTask => {
    const indexOfExistingTask = this.state.tasks.findIndex(
      task => task.text === rawTask.text
    )
    if (indexOfExistingTask !== -1)
      this.setState({
        errorMessage: 'Bereits vergeben'
      })
    else {
      this.toggleEntryWindow()
      const newTasks = [
        ...this.state.tasks,
        { ...rawTask, selected: false, id: uid(), type: 'tasks' }
      ]

      this.setState({
        tasks: newTasks,
        createNewTask: !this.state.createNewTask,
        errorMessage: ''
      })
    }
  }

  prepareEdit(index) {
    this.loadAllTags(index)
    this.setState({
      editEntry: !this.state.editEntry,
      editIndex: index
    })
  }

  toggleCreateNewTaskWindow = () => {
    this.toggleEntryWindow()
    this.setState({
      createNewTask: !this.state.createNewTask
    })
  }

  resetTags() {
    const reset = list => {
      return list.map(item => {
        item.selected = false
        return item
      })
    }

    this.setState({
      tasks: reset(this.state.tasks),
      amount: reset(this.state.amount),
      energy: reset(this.state.energy),
      mood: reset(this.state.mood)
    })
  }

  loadAllTags = index => {
    this.toggleEntryWindow()
    const textConfig = this.state.entryTexts[index].textConfig

    textConfig.forEach(item => {
      Object.entries(item).forEach(([key, value]) =>
        this.loadSelectedTags(key, value)
      )
    })
  }

  loadSelectedTags = (key, keyValue) => {
    const index = this.state[key].findIndex(item => item.text === keyValue)

    const newArray = [
      ...this.state[key].slice(0, index),
      { ...this.state[key][index], selected: true },
      ...this.state[key].slice(index + 1)
    ]
    this.setState({
      [key]: newArray
    })
  }

  selectClickedTag = (id, type, typeName) => {
    const indexNew = type.findIndex(item => item.id === id)
    const indexOld = type.findIndex(item => item.selected === true)
    let newArray

    indexOld < 0
      ? (newArray = type)
      : (newArray = [
          ...type.slice(0, indexOld),
          { ...type[indexOld], selected: false },
          ...type.slice(indexOld + 1)
        ])

    if (indexOld !== indexNew)
      newArray = [
        ...newArray.slice(0, indexNew),
        { ...newArray[indexNew], selected: true },
        ...newArray.slice(indexNew + 1)
      ]

    this.stateUpdateSelector(typeName, newArray)
  }

  stateUpdateSelector = (key, newArray) => {
    this.setState({
      [key]: newArray
    })
  }
}
