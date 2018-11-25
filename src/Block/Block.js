import React, { Component } from 'react'
import { StyledBlock } from './Styled'

export default class Block extends Component {
  render () {
    return (
      <StyledBlock {...this.props} />
    )
  }
}
