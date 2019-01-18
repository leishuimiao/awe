import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledThinWrap } from './Styled'
import TouchFeedback from 'rmc-feedback'
import { ThemeProvider } from 'styled-components'
import theme from '../Theme'
import { getClassNameByProps } from '../utils/utils'
import Icon from '../Icon'

export default class Button extends Component {
  static propsType = {
    fill: PropTypes.bool,
    round: PropTypes.bool,
    big: PropTypes.bool,
    small: PropTypes.bool,
    thin: PropTypes.bool,
    active: PropTypes.bool,
    loading: PropTypes.bool,
    color: PropTypes.string,
    block: PropTypes.string
  }
  render () {
    const { disabled, color, fill, block, className, big, small, thin: propsThin, round, active, loading, children: propsChildren, ...other } = this.props
    const thin = !fill ? propsThin : undefined
    const { main, ...rest } = theme
    const buttonTheme = {
      main: theme[color] || main,
      ...rest
    }
    const size = big ? 17 : (small ? 12 : 14)
    let children = propsChildren
    if (loading) {
      children = <Fragment><Icon type="loading" size={size} color={fill ? '#fff' : undefined} />{children}</Fragment>
    }
    return (
      <ThemeProvider theme={buttonTheme}>
        <TouchFeedback activeClassName="active-state" disabled={disabled || loading}>
          <StyledButton
            className={getClassNameByProps('button', {
              block,
              round,
              fill,
              big,
              small,
              thin,
              active,
              loading,
              disabled
            }, className)}
            round={round}
            thin={thin}
            disabled={disabled || loading}
            {...other}
          >{thin ? <StyledThinWrap>{children}</StyledThinWrap> : children}</StyledButton>
        </TouchFeedback>
      </ThemeProvider>
    )
  }
}
