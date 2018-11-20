import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, select, date } from '@storybook/addon-knobs'

import JournalCard from '../components/JournalCard'
import Button from '../components/Button'
import EntryWindow from '../components/EntryWindow'

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('Button', module).add('Add Story', () => (
  <Button
    text={text('Buttontext', 'Add Entry')}
    onClick={action('Open new window')}
  />
))

storiesOf('EntryWindow', module).add('Plain Window', () => <EntryWindow />)

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
  />
))