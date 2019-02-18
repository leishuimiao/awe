import React, { Component } from 'react'
import { StyledCardFooter } from './Styled'

export default class CardFooter extends Component {
  render () {
    return (
      <StyledCardFooter {...this.props} />
    )
  }
}
