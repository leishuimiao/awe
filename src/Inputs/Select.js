import React, { Component } from 'react'
import { StyledInputWrap } from './Styled'

export default class Select extends Component {
  render () {
    return (
      <StyledInputWrap isDrop>
        <select {...this.props} />
      </StyledInputWrap>
    )
  }
}
