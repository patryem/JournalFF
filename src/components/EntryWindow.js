import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './Button'

const Wrapper = styled.section`
  width: 85vw;
  background: #fefefe;
  box-shadow: 0 3px 5px 0 #ccc;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`

export default class EntryWindow extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick, handleRenderTags } = this.props
    return (
      <Wrapper data-cy="EntryWindow">
        {handleRenderTags()}
        <Button text="Submit" onClick={() => onClick(this.getEntry())} />
      </Wrapper>
    )
  }
}
