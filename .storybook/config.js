import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withOptions } from '@storybook/addon-options'

addDecorator(withKnobs)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
