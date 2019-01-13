import React, { Component } from 'react'
import { Input, Select, Textarea } from '../Inputs'
import {
  StyledListItem,
  StyledListItemMedia,
  StyledListItemInner,
  StyledItemLabel
} from './Styled'
import { getFuncitonName } from '../utils/utils'

export default class ListInput extends Component {
  static componentName = 'ListInput'
  getChildrenTypes (children) {
    const optionChildren = []
    const mediaChildren = []
    const insert = (element) => {
      if (getFuncitonName(element && element.type) === 'option') {
        optionChildren.push(element)
      } else {
        mediaChildren.push(element)
      }
    }
    if (children && children.length > 1) {
      children.forEach(element => {
        insert(element)
      })
    } else {
      insert(children)
    }

    return {
      option: optionChildren,
      media: mediaChildren
    }
  }
  render () {
    const { children, label, type, className, ...rest } = this.props
    let { option, media } = this.getChildrenTypes(children)
    let InputElement
    switch (type) {
      case 'select':
        InputElement = Select
        break
      case 'textarea':
        InputElement = Textarea
        option = null
        break
      default:
        InputElement = Input
        option = null
        break
    }
    return (
      <li>
        <StyledListItem className={className}>
          {children && <StyledListItemMedia>{media}</StyledListItemMedia>}
          <StyledListItemInner isInput>
            {label && <StyledItemLabel>{label}</StyledItemLabel>}
            <InputElement type={type} {...rest}>{option}</InputElement>
          </StyledListItemInner>
        </StyledListItem>
      </li>
    )
  }
}
