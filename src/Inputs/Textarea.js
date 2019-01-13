import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledInputWrap } from './Styled'

export default class Textarea extends Component {
  static defaultProps = {
    resizable: false
  }
  static propsType = {
    resizable: PropTypes.bool
  }
  handleChange = (e) => {
    const { onChange, resizable } = this.props
    if (resizable) {
      const element = e.target
      element.style.height = null
      element.scrollTop = 0
      element.style.height = element.scrollHeight + 'px'
    }
    onChange && onChange(e)
  }
  render () {
    const { children, resizable, onChange, className: propsClassName, ...rest } = this.props
    let className = resizable ? 'resizable' : ''
    if (propsClassName) {
      className += (' ' + className)
    }
    return (
      <StyledInputWrap>
        <textarea className={className} {...rest} onChange={this.handleChange} />
      </StyledInputWrap>
    )
  }
}
