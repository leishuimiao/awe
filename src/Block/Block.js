import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledBlock } from './Styled'
import { getClassNameByProps } from '../utils/utils'

export default class Block extends Component {
  static propsType = {
    strong: PropTypes.bool,
    inset: PropTypes.bool
  }

  render () {
    const { className, strong, inset, ...rest } = this.props
    return (
      <StyledBlock
        className={getClassNameByProps('block', { strong }, { [`${UI_NAME}-inset`]: inset }, className)}
        {...rest}
      />
    )
  }
}
