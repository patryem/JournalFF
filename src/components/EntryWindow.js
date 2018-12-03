import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './Button'
import Input from './Input'
import Checkbox from './Checkbox'

const Wrapper = styled.section`
  width: 85vw;
  background: #fefefe;
  box-shadow: 0 0 10px 0 #ccc;
  justify-self: center;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  bottom: 30px;
  position: absolute;
  bottom: 30px;
  min-height: 200px;
  transition: height 3s ease;
  &.newTask {
    grid-template-columns: auto;
    grid-gap: 5px;
    justify-content: center;
  }
  button {
    grid-column: 1 / -1;
  }
  label {
    font-size: 20px;
  }
`

export default class EntryWindow extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  state = {
    text: '',
    amount: '',
    energy: '',
    mood: ''
  }

  render() {
    const {
      createNewTask,
      editEntry,
      onClick,
      renderAmount,
      renderEnergy,
      renderMood,
      renderTasks,
      replaceEntry
    } = this.props
    return createNewTask ? (
      <Wrapper data-cy="EntryWindow" className="newTask">
        <Input
          name={'newTask'}
          labelText={'New Task: '}
          onChange={this.handleChange}
          required
        />
        <Checkbox
          checked={this.state.amount}
          name={'amount'}
          label={'Amount'}
          onChange={this.handleChange}
        />
        <Checkbox
          checked={this.state.energy}
          name={'energy'}
          label={'Energy'}
          onChange={this.handleChange}
        />
        <Checkbox
          checked={this.state.mood}
          name={'mood'}
          label={'Mood'}
          onChange={this.handleChange}
        />
        <Button
          text="Add Task"
          onClick={this.handleEntry}
          fontSize={20}
          height={35}
        />
      </Wrapper>
    ) : (
      <Wrapper data-cy="EntryWindow">
        {renderTasks()}
        {renderAmount()}
        {renderEnergy()}
        {renderMood()}
        <Button
          className="submit"
          text="Submit"
          onClick={editEntry ? (onClick, replaceEntry) : onClick}
          fontSize={20}
          height={35}
        />
      </Wrapper>
    )
  }

  handleChange = event => {
    switch (event.target.name) {
      case 'amount':
        this.setState({ amount: event.target.checked })
        break
      case 'energy':
        this.setState({ energy: event.target.checked })
        break
      case 'mood':
        this.setState({ mood: event.target.checked })
        break
      case 'newTask':
        this.setState({ text: event.target.value })
        break
      default:
        break
    }
  }

  handleEntry = () => {
    this.state.text && this.props.submitNewTask(this.state)

    this.setState({
      text: '',
      amount: '',
      energy: '',
      mood: ''
    })
  }
}
