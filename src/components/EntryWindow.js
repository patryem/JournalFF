import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './Button'
import Input from './Input'
import Checkbox from './Checkbox'

const Wrapper = styled.section`
  width: 85vw;
  min-height: 200px;
  background: rgb(245, 245, 245);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  justify-self: center;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  bottom: 30px;
  position: absolute;
  bottom: 30px;
  &.newTask {
    grid-template-columns: 80vw;
    grid-gap: 5px;
    justify-content: center;
  }

  .alert {
    display: flex;
    justify-content: center;
    color: white;
    background: #ab3a2a;
    font-size: 20px;
    border-radius: 0 0 7px 7px;
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
      errorMessage,
      onClick,
      renderAmount,
      renderEnergy,
      renderMood,
      renderTasks,
      replaceEntry
    } = this.props
    return createNewTask ? (
      <Wrapper data-cy="EntryWindow" className="newTask">
        <div>
          <Input
            name={'newTask'}
            labelText={'New Task: '}
            onChange={this.handleChange}
          />
          <div className="alert">{errorMessage}</div>
        </div>
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
    this.state.text &&
      this.props.submitNewTask(this.state) &&
      this.setState({
        text: '',
        amount: '',
        energy: '',
        mood: ''
      })
  }
}
