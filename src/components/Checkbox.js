import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  font-size: 25px;
  line-height: 1.5;
`

const Input = styled.input`
  margin: 0 25px 0 9px;
  height: 15px;
  width: 15px;
`

export default class Checkbox extends Component {
  render() {
    const { value, name, label, onChange, backgroundNumber } = this.props

    return (
      <React.Fragment>
        <Label htmlFor={name} data-cy="Checkbox">
          <Input
            type="checkbox"
            id={name}
            value={value}
            name={name}
            onChange={event => onChange(event)}
          />
          {label + ' '} <Icon backgroundNumber={backgroundNumber} />
        </Label>
      </React.Fragment>
    )
  }
}
