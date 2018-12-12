import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Input = styled.input`
  width: 80vw;
  max-width: 350px;
  grid-column: 1 / -1;
  .gridHandler {
    grid-column: 1 / -1;
  }
`

export default class Slider extends Component {
  render() {
    const { name, labelText, value, onChange } = this.props
    return (
      <React.Fragment>
        <Label htmlFor={name} className="gridHandler">
          {labelText}
          <Input
            type="range"
            min="0"
            max="120"
            step="5"
            data-cy="Slider"
            id={name}
            name={name}
            placeholder="type in a new task"
            value={value}
            onChange={event => onChange(event)}
          />
          {value} min
        </Label>
      </React.Fragment>
    )
  }
}
