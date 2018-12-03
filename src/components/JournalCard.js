import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import EntryWindow from './EntryWindow'
import Button from './Button'

const Wrapper = styled.section`
  width: 90vw;
  height: 80vh;
  background: #fefefe;
  box-sizing: border-box;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 50px auto;
  position: absolute;
  top: 10vh;
`

const CardNav = styled.section`
  box-sizing: border-box;
  height: 100px;
  display: flex;
  justify-content: space-around;
  padding: 30px;
`

const Header = styled.h1`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 6px 12px rgba(10, 10, 13, 0.12);
  font-size: 24px;
  background: #abdaf2;
  color: #333;
`

export default class JournalCard extends Component {
  static propTypes = {
    day: PropTypes.string,
    date: PropTypes.object
  }

  static defaultProps = {
    day: 'Today'
  }

  render() {
    const {
      openEntryWindow,
      createNewTask,
      editEntry,
      errorMessage,
      day,
      date,
      handleSubmit,
      renderJournalTexts,
      renderAmount,
      renderEnergy,
      renderMood,
      renderTasks,
      replaceEntry,
      submitNewTask,
      toggleCreateNewTaskWindow,
      toggleEntryWindow
    } = this.props
    return (
      <Wrapper data-cy="JournalCard">
        <Header data-cy="Date">
          <span>{day}</span>
          <span>{date.toLocaleDateString('de')}</span>
        </Header>
        <ul>{renderJournalTexts()}</ul>
        {openEntryWindow ? (
          <EntryWindow
            createNewTask={createNewTask}
            onClick={handleSubmit}
            renderAmount={renderAmount}
            renderEnergy={renderEnergy}
            renderMood={renderMood}
            renderTasks={renderTasks}
            editEntry={editEntry}
            replaceEntry={replaceEntry}
            submitNewTask={submitNewTask}
            errorMessage={errorMessage}
          />
        ) : (
          <CardNav>
            <Button
              text="New Entry"
              onClick={toggleEntryWindow}
              fontSize={20}
              height={35}
            />
            <Button
              text="New Task"
              onClick={toggleCreateNewTaskWindow}
              fontSize={20}
              height={35}
            />
          </CardNav>
        )}
      </Wrapper>
    )
  }
}
