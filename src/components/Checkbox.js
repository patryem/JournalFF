import React, { Component } from 'react'
import styled from 'styled-components'

import Icon from './Icon'

const Input = styled.input`
  height: 15px;
  width: 15px;
`

export default class Checkbox extends Component {
  render() {
    const { value, name, label, onChange, backgroundNumber } = this.props

    return (
      <React.Fragment>
        <label htmlFor={name} data-cy="Checkbox">
          {label + ' '} <Icon backgroundNumber={backgroundNumber} />
          <Input
            type="checkbox"
            id={name}
            value={value}
            name={name}
            onChange={event => onChange(event)}
          />
        </label>
      </React.Fragment>
    )
  }
}
