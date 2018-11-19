import React, { Component } from 'react'
import { StyledBlock } from './Styled'

export default class Block extends Component {
  render () {
    const { children, ...rest } = this.props
    return (
      <StyledBlock {...rest}>{children}</StyledBlock>
    )
  }
}
