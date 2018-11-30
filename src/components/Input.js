import React, { Component } from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  box-shadow: inset 0 2px 8px #bbb;
`

export default class Input extends Component {
  render() {
    const { name, labelText } = this.props
    return (
      <React.Fragment>
        <label for={name}>
          {labelText}
          <StyledInput id={name} name={name} placeholder="type in a new task" />
        </label>
      </React.Fragment>
    )
  }
}
