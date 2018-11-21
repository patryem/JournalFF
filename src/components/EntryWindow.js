import React, { Component } from 'react'
import styled from 'styled-components'
import uid from 'uid'

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
      { text: 'work', selected: false, id: uid() },
      { text: 'sleep', selected: false, id: uid() },
      { text: 'dance', selected: false, id: uid() }
    ]
  }

  selectClickedTag(id) {
    const { tags } = this.state
    const indexNew = tags.findIndex(tag => tag.id === id)
    const indexOld = tags.findIndex(tag => tag.selected === true)
    let newTags

    if (indexOld >= 0) {
      newTags = [
        ...tags.slice(0, indexOld),
        { ...tags[indexOld], selected: false },
        ...tags.slice(indexOld + 1)
      ]
    } else {
      newTags = tags
    }

    console.log(newTags)
    console.log(indexNew)
    console.log(indexOld)
    this.setState({
      tags: [
        ...newTags.slice(0, indexNew),
        { ...newTags[indexNew], selected: true },
        ...newTags.slice(indexNew + 1)
      ]
    })
  }

  renderTags() {
    return this.state.tags.map(tag => (
      <EntryTag
        text={tag.text}
        selected={tag.selected}
        onClick={() => this.selectClickedTag(tag.id)}
        key={tag.id}
      />
    ))
  }

  findText = () => {
    const findTag = this.state.tags.find(tag => tag.selected === true)
    return findTag.text
  }

  render() {
    const { onClick } = this.props
    return (
      <Wrapper>
        {this.renderTags()}
        <Button text="Submit" onClick={() => onClick(this.findText())} />
      </Wrapper>
    )
  }
}
