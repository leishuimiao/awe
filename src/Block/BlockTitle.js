import React, { Component } from 'react'
import { StyledBlockTitle } from './Styled'

export default class BlockTitle extends Component {
  render () {
    return (
      <StyledBlockTitle {...this.props} />
    )
  }
}
