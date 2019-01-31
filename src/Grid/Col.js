import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledCol, StyledColInner } from './Styled'
import TouchFeedback from 'rmc-feedback'

class Col extends Component {
  static propTypes = {
    width: PropTypes.number,
    tabletWidth: PropTypes.number,
    square: PropTypes.bool
  }
  render () {
    const { props, context } = this
    const { isBox } = context

    if (isBox) {
      const { children, ...rest } = props
      return (
        <StyledCol {...rest} {...context}>
          <TouchFeedback activeClassName="active-state"><StyledColInner>{children}</StyledColInner></TouchFeedback>
        </StyledCol>
      )
    }

    return (
      <StyledCol {...props} {...context} />
    )
  }
}

Col.contextTypes = {
  noGap: PropTypes.bool,
  isBox: PropTypes.bool,
  gap: PropTypes.number,
  childAmt: PropTypes.number
}

export default Col
