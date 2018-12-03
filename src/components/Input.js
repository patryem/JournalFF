import React, { Component } from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  box-shadow: inset 0 2px 8px #bbb;
  justify-self: center;
`

export default class Input extends Component {
  render() {
    const { name, labelText, value, onChange } = this.props
    return (
      <React.Fragment>
        <label htmlFor={name}>
          {labelText}
          <StyledInput
            id={name}
            name={name}
            placeholder="type in a new task"
            value={value}
            onChange={event => onChange(event)}
          />
        </label>
      </React.Fragment>
    )
  }
}
