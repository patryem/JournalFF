import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, select, date, boolean } from '@storybook/addon-knobs'

import JournalCard from '../components/JournalCard'
import Button from '../components/Button'
import EntryTag from '../components/EntryTag'
import Separator from '../components/Separator'
import Input from '../components/Input'
import EntryCard from '../components/EntryCard'
import InfoBox from '../components/InfoBox'

import StyleBox from './StyleBox'

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('Button', module).add('Add Entry', () => (
  <Button
    text={text('Buttontext', 'Add Entry')}
    onClick={action('Open new window')}
  />
))

storiesOf('EntryCard', module).add('EntryCard', () => (
  <EntryCard
    energy={text('EnergyText', 'energized')}
    time={150}
    task={text('Task', 'work')}
  />
))

storiesOf('EntryTag', module).add('Entrytag', () => (
  <React.Fragment>
    {' '}
    <EntryTag
      text={text('Normal', 'Sleep')}
      onClick={action('Toggle tag')}
      selected={boolean('Tag 1: selected', false)}
    />
    <StyleBox h={40} />
    <EntryTag
      text={text('Selected', 'Work')}
      onClick={action('Toggle tag')}
      selected={boolean('Tag 2: selected', true)}
    />
  </React.Fragment>
))

storiesOf('InfoBox', module).add('Default Input', () => (
  <InfoBox
    backgroundNumber={select(
      'Icons',
      {
        clock: '0',
        Amount: '1',
        Amount2: '2',
        Amount3: '3',
        Energy: '4',
        Energy2: '5',
        Energy3: '6',
        Mood: '7',
        Mood2: '8',
        Mood3: '9'
      },
      '0'
    )}
    typeText={text('Mood or Energy level: ', 'jonny ')}
  />
))

storiesOf('Input', module).add('Default Input', () => (
  <Input name="task-input" labelText={text('Label for Input: ', 'Task: ')} />
))

storiesOf('JournalCard', module).add('JournalCard', () => (
  <JournalCard
    day={select(
      'Days',
      {
        Montag: 'Montag',
        Dienstag: 'Dienstag',
        Mittwoch: 'Mittwoch',
        Donnerstag: 'Donnerstag',
        Freitag: 'Freitag',
        Samstag: 'Samstag',
        Sonntag: 'Sonntag'
      },
      'Monday'
    )}
    date={dateKnob('Datum', new Date('2010-08-17'))}
    renderJournalTexts={action('Render text')}
  />
))

storiesOf('Separator', module).add('default', () => (
  <React.Fragment>
    <Separator text="One" />
    <StyleBox h={40} />
    <Separator text="Two words" />
  </React.Fragment>
))
