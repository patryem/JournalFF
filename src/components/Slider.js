import React, { Component } from 'react'
import styled from 'styled-components'
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Label = styled.label`
  width: 80vw;
  max-width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`

export default class Slider extends Component {
  render() {
    const { name, labelText, value, onChange } = this.props
    return (
      <React.Fragment>
        <Label htmlFor={name}>
          {labelText}
          <RCSlider
            min={0}
            max={120}
            step={5}
            data-cy="Slider"
            id={name}
            name={name}
            placeholder="type in a new task"
            value={value}
            handleStyle={{
              background: '#750000',
              border: '1px solid white',
              transform: 'scale(1.5)'
            }}
            trackStyle={{ background: '#6ec6ff' }}
            railStyle={{ background: '#0069c0' }}
            onChange={value => onChange(value)}
          />
          {value} min
        </Label>
      </React.Fragment>
    )
  }
}
