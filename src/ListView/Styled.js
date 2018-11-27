import styled from 'styled-components'
import retinaline, { removeRetinaline } from '../styles/retinaline'
import { borderColor, mainPadding } from '../Theme'

const StyledItemTitle = styled.div.attrs({
  className: `${UI_NAME}-item-title`
})`
  position: relative;
  max-width: 100%;
  min-width: 0;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const StyledListItem = styled.div.attrs({
  className: `${UI_NAME}-item-content`
})`
  position: relative;
  min-height: 44px;
  padding-left: ${mainPadding};
  transition: background .2s ease;

  &.active-state {
    background: #D9D9D9;
  }
`

const StyledListItemInner = styled.div.attrs({
  className: `${UI_NAME}-item-inner`
})`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 44px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: ${mainPadding};
  align-items: center;
  justify-content: space-between;

  ${props => props.arrow && `
    padding-right: 35px;
    background-position: 95% center;
    background-position: calc(100% - 15px) center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%228%22%20height%3D%2213%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%3Cpath%20fill%3D%22%23c7c7cc%22%20d%3D%22M7.86396103%206.5L1.5.13603897.08578644%201.55025253%205.0355339%206.5.08578644%2011.44974747%201.5%2012.86396103l5.65685425-5.65685425z%22%2F%3E%3C%2Fsvg%3E");
  `}

  ${retinaline('bottom', borderColor)}
`

const StyledListItemMedia = styled.div.attrs({
  className: `${UI_NAME}-item-media`
})`
  display: flex;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 8px;
  flex-shrink: 0;
  flex-wrap: nowrap;
  align-items: center;

  + ${StyledListItemInner} {
    margin-left: ${mainPadding};
  }

  > img, > .${UI_NAME}-icon {
    + img, + .${UI_NAME}-icon {
      margin-left: 5px;
    }
  }
`

const StyledList = styled.div`
  margin: 35px 0;
  font-size: 17px;

  ${props => props.inset && `
    margin-left: ${mainPadding};
    margin-right: ${mainPadding};
    border-radius: 7px;
  `}

  ul {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    background: #fff;
    ${retinaline('top', borderColor)}
    ${retinaline('bottom', borderColor)}

    ${props => props.inset && `
      border-radius: 7px;
      ${removeRetinaline('top')}
      ${removeRetinaline('bottom')}
    `}
  }

  li {
    &:last-child {
      ${StyledListItemInner} {
        ${removeRetinaline('bottom')}
      }
    }
  }

  ${StyledListItem} {
    display: flex;
    max-width: 100%;
    align-items: center;
    color: #000;
  }

  ${props => props.mediaList && `
    ${StyledListItemInner} {
      display: block;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    ${StyledItemTitle} {
      font-weight: 600;
    }

    ${StyledListItemMedia} {
      padding-top: 12px;
      padding-bottom: 10px;
      align-self: flex-start;
    }
  `}

  ${props => props.inset && `
    li:first-child {
      ${StyledListItem} {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }
    }

    li:last-child {
      ${StyledListItem} {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
      }
    }
  `}
`

const StyledItemTitleRow = styled.div.attrs({
  className: `${UI_NAME}-item-title-row`
})`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`

const StyledItemSubtitle = styled.div.attrs({
  className: `${UI_NAME}-item-subtitle`
})`
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  font-size: 15px;
`

const StyledItemText = styled.div.attrs({
  className: `${UI_NAME}-item-text`
})`
  position: relative;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 15px;
  color: #8e8e93;
  line-height: 21px;
  max-height: 40px;
`

const StyledItemAfter = styled.div.attrs({
  className: `${UI_NAME}-item-after`
})`
  display: flex;
  margin-left: auto;
  flex-shrink: 0;
  white-space: nowrap;
  padding-left: 5px;
  color: #8e8e93;
`

const StyledItemBadge = styled.span.attrs({
  className: `${UI_NAME}-item-badge`
})`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 20px;
  padding: 0 6px;
  margin: 0;
  line-height: 20px;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  background: #8e8e93;
`

const StyledItemHeader = styled.div.attrs({
  className: `${UI_NAME}-item-header`
})`
  margin-bottom: 2px;
  line-height: 1.2;
  font-weight: 400;
  font-size: 12px;
  white-space: normal;
`

const StyledItemFooter = styled.div.attrs({
  className: `${UI_NAME}-item-footer`
})`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: #8e8e93;
  white-space: normal;
`
const StyledDivider = styled.div.attrs({
  className: `${UI_NAME}-item-divider`
})`
  position: relative;
  z-index: 15;
  max-width: 100%;
  margin-top: -1px;
  padding: 6px ${mainPadding};
  background: #f7f7f7;
  color: #8e8e93;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${retinaline('top', borderColor)}
`

const StyledListGroup = styled.div.attrs({
  className: `${UI_NAME}-list-group`
})`
  ul {
    ${removeRetinaline('top')}
    ${removeRetinaline('bottom')}
  }

  &:last-child {
    ul {
      &:after {
        display: block;
      }
    }
  }
`
const StyledGroupTitle = styled.li.attrs({
  className: `${UI_NAME}-group-title`
})`
  position: relative;
  position: sticky;
  top: 0;
  z-index: 20;
  margin-top: 0;
  padding: 4px ${mainPadding};
  color: #000;
  font-weight: bold;
  background: #f7f7f7;
`
export {
  StyledList,
  StyledListItem,
  StyledListItemInner,
  StyledItemTitleRow,
  StyledItemTitle,
  StyledItemSubtitle,
  StyledItemText,
  StyledItemAfter,
  StyledListItemMedia,
  StyledItemHeader,
  StyledItemFooter,
  StyledItemBadge,
  StyledDivider,
  StyledListGroup,
  StyledGroupTitle
}
