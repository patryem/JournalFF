import React, { Component } from 'react'
import styled from 'styled-components'

import Button from './Button'
import EntryTag from './EntryTag'

const Wrapper = styled.section`
  width: 200px;
  height: 250px;
  background: rgba(111, 111, 124, 0.8);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class EntryWindow extends Component {
  state = {
    tags: [
      { text: 'work', selected: false },
      { text: 'sleep', selected: false },
      { text: 'dance', selected: false }
    ]
  }

  renderTags() {
    return this.state.tags.map(tag => (
      <EntryTag
        text={tag.text}
        selected={tag.selected}
        onClick={() => console.log('click')}
      />
    ))
  }

  render() {
    const { onClick } = this.props
    return (
      <Wrapper>
        <Button text="Submit" onClick={onClick} />
        {this.renderTags()}
      </Wrapper>
    )
  }
}
