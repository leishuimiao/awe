import React, { Component } from 'react'
import { StyledCardHeader } from './Styled'

export default class CardHeader extends Component {
  render () {
    return (
      <StyledCardHeader {...this.props} />
    )
  }
}
