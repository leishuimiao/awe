import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledRow } from './Styled'

class Row extends Component {
  static propTypes = {
    noGap: PropTypes.bool,
    isBox: PropTypes.bool,
    gap: PropTypes.number
  }

  static defaultProps = {
    noGap: false,
    isBox: false,
    gap: 15
  }

  getChildContext () {
    const { noGap, isBox, gap, children } = this.props
    return {
      noGap,
      isBox,
      gap,
      childAmt: children.length
    }
  }

  render () {
    const { className: propsClassName, isBox, ...rest } = this.props
    const className = (UI_NAME) + '-' + (isBox ? 'box' : 'row') + (propsClassName ? (' ' + propsClassName) : '')
    const props = {
      className,
      isBox,
      ...rest
    }
    return (
      <StyledRow {...props} />
    )
  }
}

Row.childContextTypes = {
  noGap: PropTypes.bool,
  isBox: PropTypes.bool,
  gap: PropTypes.number,
  childAmt: PropTypes.number
}

export default Row
