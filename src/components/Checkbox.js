import React, { Component } from 'react'

export default class Checkbox extends Component {
  render() {
    const { value, name, label, onChange } = this.props

    return (
      <React.Fragment>
        <label htmlFor={name}>
          {label + ' '}
          <input
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
