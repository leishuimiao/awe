import React, { Component } from 'react'
import { StyledBlockHeader } from './Styled'

export default class BlockFooter extends Component {
  render () {
    return (
      <StyledBlockHeader {...this.props} />
    )
  }
}
