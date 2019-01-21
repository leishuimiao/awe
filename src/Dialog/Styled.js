import styled, { css } from 'styled-components'
import theme, { mainPadding } from '../Theme'
import retinaline from '../styles/retinaline'

const background = css`
  background: rgba(255, 255, 255, .95);
`
const borderColor = 'rgba(0, 0, 0, 0.2)'
const borderRadius = '13px'

export const StyledDialog = styled.div.attrs({
  className: `${UI_NAME}-dialog`
})`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 99999;
  width: 80%;
  max-width: 320px;
  text-align: center;
  transform: translate3d(-50%, -50%, 0);
`

export const StyledDialogInner = styled.div.attrs({
  className: `${UI_NAME}-dialog-inner`
})`
  padding: ${mainPadding};
  border-radius: ${({ hasButton }) => !hasButton ? borderRadius : `${borderRadius} ${borderRadius} 0 0`};
  ${background}
`

export const StyledDialogTitle = styled.div.attrs({
  className: `${UI_NAME}-dialog-title`
})`
  font-size: 18px;
  font-weight: 600;
`

export const StyledDialogText = styled.div.attrs({
  className: `${UI_NAME}-dialog-text`
})`
  max-height: 260px;
  overflow: auto;
  margin-top: 5px;
  -webkit-overflow-scrolling: touch;
`

export const StyledDialogButtons = styled.div.attrs({
  className: `${UI_NAME}-dialog-buttons`
})`
  display: flex;
  flex-direction: ${props => (props.btnAmt === 2) ? 'row' : 'column'};

  > span {
    position: relative;
    display: block;
    padding: 0 5px;
    height: 44px;
    box-sizing: border-box;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 44px;
    font-size: 17px;
    text-align: center;
    color: ${theme.main};
    cursor: pointer;
    will-change: background;
    transition: background .2s ease;
    ${props => (props.btnAmt === 2) ? css`
      width: 50%;
      &:first-child {
        border-bottom-left-radius: ${borderRadius};
        ${retinaline('right', borderColor)}
      }
      &:last-child {
        border-bottom-right-radius: ${borderRadius};
      }
    ` : css`
      width: 100%;
      &:last-child {
        border-radius: 0 0 ${borderRadius} ${borderRadius};
      }
    `}
    ${background}

    &:last-child {
      font-weight: 500;
    }

    &.active-state {
      background: rgba(230, 230, 230, .95);
    }

    ${retinaline('top', borderColor)}
  }
`

export const StyledDialogInput = styled.div.attrs({
  className: `${UI_NAME}-dialog-input`
})`
  position: relative;
  padding: 0 5px;
  ${retinaline('round', 'rgba(0, 0, 0, .4)')}
  background: #fff;
`

export const StyledDialogInputs = styled.div.attrs({
  className: `${UI_NAME}-dialog-inputs`
})`
  margin-top: 15px;
  
  input {
    position: relative;
    z-index: 99;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 26px;
    font-size: 14px;
    background: transparent;
  }
`
