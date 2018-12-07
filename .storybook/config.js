import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withOptions } from '@storybook/addon-options'
import React from 'react'

import GlobalStyle from '../src/GlobalStyle'
import StyleBox from '../src/stories/StyleBox'

addDecorator(story => (
  <StyleBox
    p="20px 25%"
    m="0 0 20px 0"
    bg="repeating-linear-gradient(-45deg, #efefef, #efefef 1px, white 1px, white 8px)"
  >
    {story()}
    <GlobalStyle />
  </StyleBox>
))

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
