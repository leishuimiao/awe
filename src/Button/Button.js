import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Styled'
import TouchFeedback from 'rmc-feedback'
import { ThemeProvider } from 'styled-components'
import theme from '../Theme'
import classnames from 'classnames'

export default class Button extends Component {
  static propsType = {
    fill: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    small: PropTypes.bool,
    active: PropTypes.bool,
    color: PropTypes.string,
    block: PropTypes.string
  }

  getClassNameProps (props = {}) {
    const propsObj = {}
    for (const prop in props) {
      propsObj[`${UI_NAME}-button-${prop}`] = props[prop]
    }
    return propsObj
  }

  render () {
    const { disabled, color, fill, block, className, big, small, round, active, ...other } = this.props
    const { main, ...rest } = theme
    const buttonTheme = {
      main: theme[color] || main,
      ...rest
    }
    return (
      <ThemeProvider theme={buttonTheme}>
        <TouchFeedback activeClassName="active-state" disabled={disabled}>
          <StyledButton
            className={classnames({
              [`${UI_NAME}-button`]: true,
              ...this.getClassNameProps({
                block,
                round,
                fill,
                big,
                small,
                active,
                disabled
              }),
              [`${className}`]: className
            })}
            disabled={disabled}
            {...other}
          />
        </TouchFeedback>
      </ThemeProvider>
    )
  }
}
