import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import EntryWindow from './EntryWindow'
import Button from './Button'

const Wrapper = styled.section`
  width: 90vw;
  min-height: 80vh;
  background: #efefef;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 50px auto;
`

const CardNav = styled.section`
  box-sizing: border-box;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
`

const Header = styled.h1`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 10px;
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
      day,
      date,
      data,
      renderJournalTexts,
      toggleEntryWindow,
      handleSubmit,
      renderAmount,
      renderEnergy,
      renderMood,
      renderTasks,
      addingEntry,
      loadAllTags,
      editEntry
    } = this.props
    return (
      <Wrapper data-cy="JournalCard">
        <Header data-cy="Date">
          <span>{day}</span>
          <span>{date.toLocaleDateString('de')}</span>
        </Header>
        <ul>{renderJournalTexts()}</ul>
        {addingEntry ? (
          <EntryWindow
            onClick={handleSubmit}
            data={data}
            renderAmount={renderAmount}
            renderEnergy={renderEnergy}
            renderMood={renderMood}
            renderTasks={renderTasks}
          />
        ) : (
          <CardNav>
            <Button text="New Entry" onClick={toggleEntryWindow} />
            <Button text="Edit" onClick={loadAllTags} />
          </CardNav>
        )}
      </Wrapper>
    )
  }
}
