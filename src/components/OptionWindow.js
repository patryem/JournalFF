import React, { Component } from 'react'
import styled from 'styled-components'

import Button from './Button'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.23);
  background: rgb(245, 245, 245);
  position: absolute;
  right: 50px;
`

export default class OptionWindow extends Component {
  render() {
    return (
      <Wrapper>
        <Button
          onClick={this.deleteEntry}
          fontSize={14}
          height={30}
          background="ab3a2a"
          text="Delete"
        />
        <Button
          onClick={this.editEntry}
          fontSize={14}
          height={30}
          background="ab3a2a"
          text="Edit"
        />
      </Wrapper>
    )
  }

  deleteEntry = event => {
    event.stopPropagation()
    this.props.deleteEntry()
  }
  editEntry = event => {
    event.stopPropagation()
    this.props.editEntry()
    this.props.toggleOption()
  }
}
