import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  font-size: 25px;
  line-height: 1.5;
  & div {
    margin: 0 20px;
    justify-self: center;
  }
`

const Input = styled.input`
  height: 15px;
  width: 15px;
`

export default class Checkbox extends Component {
  render() {
    const { value, name, label, onChange, backgroundNumber } = this.props

    return (
      <React.Fragment>
        <Label htmlFor={name} data-cy="Checkbox">
          {label + ' '} <Icon backgroundNumber={backgroundNumber} />
          <Input
            type="checkbox"
            id={name}
            value={value}
            name={name}
            onChange={event => onChange(event)}
          />
        </Label>
      </React.Fragment>
    )
  }
}
