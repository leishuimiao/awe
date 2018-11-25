import React, { Component } from 'react'
import { StyledBlockFooter } from './Styled'

export default class BlockFooter extends Component {
  render () {
    return (
      <StyledBlockFooter {...this.props} />
    )
  }
}
