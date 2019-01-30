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
import { AccordionItem, AccordionToggle } from '../Accordion'
import TouchFeedback from 'rmc-feedback'

class ListItem extends Component {
  static componentName = 'ListItem'
  static propsType = {
    arrow: PropTypes.bool,
    media: PropTypes.node,
    divider: PropTypes.bool,
    groupTitle: PropTypes.bool,
    accordionItem: PropTypes.bool
  }
  static defaultProps = {
    arrow: false,
    media: null,
    divider: false,
    groupTitle: false
  }
  // 接收父组件参数
  static contextTypes = {
    mediaList: PropTypes.bool,
    accordionList: PropTypes.bool,
    inlineLabels: PropTypes.bool
  }
  render () {
    let { children, as, arrow, title, after, text, subtitle, header, footer, badge, divider, groupTitle, accordionItem, index, media, ...rest } = this.props
    const afterContent = after || badge
    arrow = accordionItem ? false : arrow

    if (groupTitle) return <StyledGroupTitle {...rest}>{title}</StyledGroupTitle>

    const { mediaList, accordionList } = this.context

    const titleFragment = (<Fragment>
      <StyledItemTitle>
        {header && <StyledItemHeader>{header}</StyledItemHeader>}
        {title}
        {footer && <StyledItemFooter>{footer}</StyledItemFooter>}
      </StyledItemTitle>
      {afterContent && <StyledItemAfter>{badge ? <StyledItemBadge>{badge}</StyledItemBadge> : afterContent}</StyledItemAfter>}
    </Fragment>)

    const childrenContent = (<Fragment>
      {!divider && <TouchFeedback activeClassName="active-state" disabled={!arrow && !accordionItem}>
        <StyledListItem {...rest} accordionitem={accordionItem} as={accordionItem ? AccordionToggle : as}>
          {children && !accordionList && <StyledListItemMedia>{children}</StyledListItemMedia>}
          {media && <StyledListItemMedia>{media}</StyledListItemMedia>}
          <StyledListItemInner arrow={arrow}>
            {mediaList ? <StyledItemTitleRow>{titleFragment}</StyledItemTitleRow> : titleFragment}
            {subtitle && <StyledItemSubtitle>{subtitle}</StyledItemSubtitle>}
            {text && <StyledItemText>{text}</StyledItemText>}
          </StyledListItemInner>
        </StyledListItem>
      </TouchFeedback>}
      {divider && <StyledDivider>{title}</StyledDivider>}
      {accordionList && children}
    </Fragment>)

    if (accordionItem) return <AccordionItem index={index}>{childrenContent}</AccordionItem>

    return (
      <li>{childrenContent}</li>
    )
  }
}

export default ListItem
