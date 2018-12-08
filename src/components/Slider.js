import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 300px;
`

export default class Slider extends Component {
  render() {
    const { name, labelText, value, onChange } = this.props
    return (
      <React.Fragment>
        <label htmlFor={name}>
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
        </label>
      </React.Fragment>
    )
  }
}
