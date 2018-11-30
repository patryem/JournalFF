import React, { Component } from 'react'

import styled from 'styled-components'

const Input = styled.input`
  box-shadow: inset 0 2px 8px #bbb;
`

export default class Input extends Component {
  render() {
    const { name, id } = this.props
    return (
      <React.Fragment>
        <label for={id} />
        <Input id={id} name={name} placeholder="type in a new task" />
      </React.Fragment>
    )
  }
}
