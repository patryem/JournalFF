import React, { Component } from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  border-radius: 5px;
  justify-self: center;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.23);
  min-height: 30px;
  min-width: 40vw;
  border: none;
`

export default class Input extends Component {
  render() {
    const { name, labelText, value, onChange } = this.props
    return (
      <React.Fragment>
        <label htmlFor={name}>
          {labelText}
          <StyledInput
            data-cy="Input"
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
