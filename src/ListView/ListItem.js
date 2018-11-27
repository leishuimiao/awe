import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  StyledListItem,
  StyledListItemMedia,
  StyledListItemInner,
  StyledItemTitleRow,
  StyledItemTitle,
  StyledItemSubtitle,
  StyledItemText,
  StyledItemAfter,
  StyledItemHeader,
  StyledItemFooter,
  StyledItemBadge,
  StyledDivider,
  StyledGroupTitle
} from './Styled'
import TouchFeedback from 'rmc-feedback'

class ListItem extends Component {
  static componentName = 'ListItem'
  static propsType = {
    arrow: PropTypes.bool,
    divider: PropTypes.bool,
    groupTitle: PropTypes.bool
  }
  static defaultProps = {
    arrow: false,
    divider: false,
    groupTitle: false
  }
  render () {
    const { children, arrow, title, after, text, subtitle, header, footer, badge, divider, groupTitle, ...rest } = this.props
    const afterContent = after || badge

    if (groupTitle) return <StyledGroupTitle {...rest}>{title}</StyledGroupTitle>

    const isMediaList = this.context.mediaList

    const titleFragment = (<Fragment>
      <StyledItemTitle>
        {header && <StyledItemHeader>{header}</StyledItemHeader>}
        {title}
        {footer && <StyledItemFooter>{footer}</StyledItemFooter>}
      </StyledItemTitle>
      {afterContent && <StyledItemAfter>{badge ? <StyledItemBadge>{badge}</StyledItemBadge> : afterContent}</StyledItemAfter>}
    </Fragment>)

    return (
      <li>
        {!divider && <TouchFeedback activeClassName="active-state" disabled={!arrow}>
          <StyledListItem {...rest}>
            {children && <StyledListItemMedia>{children}</StyledListItemMedia>}
            <StyledListItemInner arrow={arrow}>
              {isMediaList ? <StyledItemTitleRow>{titleFragment}</StyledItemTitleRow> : titleFragment}
              {subtitle && <StyledItemSubtitle>{subtitle}</StyledItemSubtitle>}
              {text && <StyledItemText>{text}</StyledItemText>}
            </StyledListItemInner>
          </StyledListItem>
        </TouchFeedback>}
        {divider && <StyledDivider>{title}</StyledDivider>}
      </li>
    )
  }
}

// 接收父组件参数
ListItem.contextTypes = {
  mediaList: PropTypes.bool
}

export default ListItem
