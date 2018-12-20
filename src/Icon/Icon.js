import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledIcon } from './Styled'
import * as Icons from './svg'
import { getHumpName } from '../utils/utils'

export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string
  }
  static defaultProps = {
    size: 19,
    color: '#333'
  }
  render () {
    const { type, size, color, ...rest } = this.props
    const typeName = getHumpName(type)
    const Icon = Icons[typeName]

    if (!Icon) throw new Error(`Icon type has no ${type}`)

    return (
      <StyledIcon type={type} {...rest}><Icon size={size} color={color} /></StyledIcon>
    )
  }
}
