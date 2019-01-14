import styled, { css } from 'styled-components'
import drop from '../styles/drop'
import theme, { mainPadding } from '../Theme'
import { StyledListItemInner } from '../ListView/Styled'

const dropDown = css`
  ${props => props.isDrop && drop('bottom', '5px', '#727272')}
`

export const StyledInputWrap = styled.div.attrs({
  className: `${UI_NAME}-input-wrap`
})`
  position: relative;
  box-sizing: border-box;
  ${dropDown}
  ${props => props.hasClearButton && css`
    padding-right: 40px;
    
    ${StyledListItemInner} & {
      margin-right: -${mainPadding};
    }
  `}

  textarea {
    height: 100px;
  }

  select {
    padding-right: 14px;
  }
`
export const StyledClearButtonWrap = styled.div.attrs({
  className: `${UI_NAME}-input-clearn-button-wrap`
})`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
`

export const StyledClearButton = styled.label.attrs({
  className: `${UI_NAME}-input-clear-button`
})`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  opacity: .7;
  will-change: opacity;
  transition: opacity .2s;

  &.active-state {
    opacity: 1;
  }

  > i {
    pointer-events: none;
  }
`

export const StyledInputInfo = styled.div.attrs({
  className: `${UI_NAME}-input-info`
})`
  position: relative;
  margin-bottom: 6px;
  margin-top: -8px;
  line-height: 1.4;
  font-size: 12px;
  color: ${theme.gray}

  ${props => props.isInvalid && `
    color: ${theme.red}
  `}
`
