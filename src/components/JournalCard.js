import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import EntryWindow from './EntryWindow'
import Button from './Button'

const Wrapper = styled.section`
  width: 90vw;
  min-height: 600px;
  height: 92vh;
  background: #fefefe;
  box-sizing: border-box;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 75px auto;
  position: absolute;
  top: 4vh;
`
const CardsContainer = styled.section`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`

const CardNav = styled.section`
  box-sizing: border-box;
  height: 50px;
  display: flex;
  justify-content: space-around;
  padding: 8px;
`

const Header = styled.header`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0 0 10px;
  padding: 10px 10px 15px;
  border-radius: 5px 5px 0 0;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  background: #0069c0;
  color: #000;
`
const Left = styled.div`
  height: 40px;
  width: 20px;
  background-repeat: no-repeat;
  background-image: url('Icons/arrow-left.svg');
`
const Right = styled.div`
  height: 40px;
  width: 20px;
  background-repeat: no-repeat;
  background-image: url('Icons/arrow-right.svg');
`

export default class JournalCard extends Component {
  cardContainer = React.createRef()
  static propTypes = {
    day: PropTypes.string,
    date: PropTypes.object
  }

  static defaultProps = {
    day: 'Today'
  }

  componentDidMount = () => {
    this.cardContainer.current.scrollTop =
      this.cardContainer.current.scrollHeight -
      this.cardContainer.current.getBoundingClientRect().height
  }

  componentDidUpdate = () => {
    this.cardContainer.current.scrollTop =
      this.cardContainer.current.scrollHeight -
      this.cardContainer.current.getBoundingClientRect().height
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
      renderSlider,
      renderTasks,
      replaceEntry,
      resetTime,
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
        <CardsContainer ref={this.cardContainer}>
          {renderJournalTexts()}
        </CardsContainer>

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
            renderSlider={renderSlider}
            resetTime={resetTime}
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
