import styled, { css } from 'styled-components'
import colorAlpha from 'color-alpha'
import theme from '../Theme'

const DEFAULT_RADIUS = '5px'
const ROUND_RADIUS = '29px'
const DEFAULT_OPACITY = '.7'

const block = css`
  &.${UI_NAME}-button-block {
    display: block;
    width: 100%;
  }
`
const big = css`
  &.${UI_NAME}-button-big {
    height: 44px;
    line-height: 42px;
    font-size: 17px;
  }
`
const small = css`
  &.${UI_NAME}-button-small {
    height: 24px;
    line-height: 22px;
    font-size: 12px;
  }
`
const round = css`
  &.${UI_NAME}-button-round {
    border-radius: ${ROUND_RADIUS};
  }
`
const fill = css`
  &.${UI_NAME}-button-fill {
    color: ${props => (props.theme.main === theme.white) ? '#000' : '#fff'};
    background: ${props => props.theme.main};

    &.active-state {
      opacity: ${DEFAULT_OPACITY};
    }
  }
`
const active = css`
  &.${UI_NAME}-button-active {
    color: #fff;
    background: ${props => props.theme.main};
  }
`
const disabled = css`
  &.${UI_NAME}-button-disabled, &:disabled {
    pointer-events: none;
    opacity: ${DEFAULT_OPACITY};
  }
`

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  appearance: none;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0;
  overflow: hidden;
  border: 1px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  border-radius: ${DEFAULT_RADIUS};
  line-height: 27px;
  height: 29px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  text-align: center;
  background: none;
  will-change: background, opacity;
  transition: all .2s ease;

  &.active-state {
    background: ${props => colorAlpha(props.theme.main, 0.15)};
  }

  ${block}
  ${big}
  ${small}
  ${round}
  ${fill}
  ${active}
  ${disabled}
`

const StyledSegmented = styled.div.attrs({
  className: `${UI_NAME}-segmented`
})`
  display: flex;
  align-self: center;
  flex-flow: nowrap;

  ${StyledButton} {
    display: block;
    width: 100%;
    border-radius: 0;
    border-left-width: 0;

    &:first-child {
      border-left-width: 1px;
      border-top-left-radius: ${DEFAULT_RADIUS};
      border-bottom-left-radius: ${DEFAULT_RADIUS};
    }
    &:last-child {
      border-top-right-radius: ${DEFAULT_RADIUS};
      border-bottom-right-radius: ${DEFAULT_RADIUS};
    }

    &.${UI_NAME}-button-round {
      &:first-child {
        border-top-left-radius: ${ROUND_RADIUS};
        border-bottom-left-radius: ${ROUND_RADIUS};
      }
      &:last-child {
        border-top-right-radius: ${ROUND_RADIUS};
        border-bottom-right-radius: ${ROUND_RADIUS};
      }
    }
  }
`

export {
  StyledButton,
  StyledSegmented
}
