import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledThinWrap } from './Styled'
import TouchFeedback from 'rmc-feedback'
import { ThemeProvider } from 'styled-components'
import theme from '../Theme'
import { getClassNameByProps } from '../utils/utils'

export default class Button extends Component {
  static propsType = {
    fill: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    small: PropTypes.bool,
    thine: PropTypes.bool,
    active: PropTypes.bool,
    color: PropTypes.string,
    block: PropTypes.string
  }

  render () {
    const { disabled, color, fill, block, className, big, small, thin: propsThin, round, active, children, ...other } = this.props
    const thin = !fill ? propsThin : false
    const { main, ...rest } = theme
    const buttonTheme = {
      main: theme[color] || main,
      ...rest
    }
    return (
      <ThemeProvider theme={buttonTheme}>
        <TouchFeedback activeClassName="active-state" disabled={disabled}>
          <StyledButton
            className={getClassNameByProps('button', {
              block,
              round,
              fill,
              big,
              small,
              thin,
              active,
              disabled
            }, className)}
            round={round}
            thin={thin}
            disabled={disabled}
            {...other}
          >{thin ? <StyledThinWrap>{children}</StyledThinWrap> : children}</StyledButton>
        </TouchFeedback>
      </ThemeProvider>
    )
  }
}
