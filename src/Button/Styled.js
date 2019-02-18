import styled, { css } from 'styled-components'
import colorAlpha from 'color-alpha'
import theme from '../Theme'
import retinaline from '../styles/retinaline'

const DEFAULT_RADIUS_VALUE = 5
const DEFAULT_RADIUS = DEFAULT_RADIUS_VALUE + 'px'
const ROUND_RADIUS_VALUE = 29
const ROUND_RADIUS = ROUND_RADIUS_VALUE + 'px'
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
const thin = css`
  &.${UI_NAME}-button-thin {
    padding: 0;
    overflow: visible;
    border-color: transparent;
    ${props => retinaline('round', props.theme.main, props.round ? ROUND_RADIUS : DEFAULT_RADIUS)}

    &::after {
      transition: all .2s ease;
    }
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
const icon = css`
  .${UI_NAME}-icon {
    margin-right: 8px;
    margin-top: -2px;
  }
`
const active = css`
  &.${UI_NAME}-button-active {
    color: #fff;
    background: ${props => props.thin ? 'transparent' : props.theme.main};

    &::after {
      background: ${props => props.theme.main};
    }
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
    background: ${props => props.thin ? 'none' : colorAlpha(props.theme.main, 0.15)};
    ${props => props.thin && `
      &::after {
        background: ${colorAlpha(props.theme.main, 0.15)};
      }
    `}
  }

  ${block}
  ${big}
  ${small}
  ${thin}
  ${round}
  ${fill}
  ${icon}
  ${active}
  ${disabled}
`

const StyledThinWrap = styled.span`
  position: relative;
  z-index: 9;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: 1px solid transparent;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
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

    &.${UI_NAME}-button-thin {
      border: none;

      &::after {
        border-radius: 0;
        border-left-width: 0;

        html.pixel-ratio-2 & {
          border-radius: 0.1px;
        }

        html.pixel-ratio-3 & {
          border-radius: 0.1px;
        }

        html.pixel-ratio-4 & {
          border-radius: 0.1px;
        }
      }

      &:first-child {
        &::after {
          border-left-width: 1px;
          border-top-left-radius: ${DEFAULT_RADIUS};
          border-bottom-left-radius: ${DEFAULT_RADIUS};

          html.pixel-ratio-2 & {
            border-top-left-radius: ${DEFAULT_RADIUS_VALUE * 2}px;
            border-bottom-left-radius: ${DEFAULT_RADIUS_VALUE * 2}px;
          }

          html.pixel-ratio-3 & {
            border-top-left-radius: ${DEFAULT_RADIUS_VALUE * 3}px;
            border-bottom-left-radius: ${DEFAULT_RADIUS_VALUE * 3}px;
          }

          html.pixel-ratio-4 & {
            border-top-left-radius: ${DEFAULT_RADIUS_VALUE * 4}px;
            border-bottom-left-radius: ${DEFAULT_RADIUS_VALUE * 4}px;
          }
        }
      }

      &:last-child {
        &::after {
          border-top-right-radius: ${DEFAULT_RADIUS};
          border-bottom-right-radius: ${DEFAULT_RADIUS};

          html.pixel-ratio-2 & {
            border-top-right-radius: ${DEFAULT_RADIUS_VALUE * 2}px;
            border-bottom-right-radius: ${DEFAULT_RADIUS_VALUE * 2}px;
          }

          html.pixel-ratio-3 & {
            border-top-right-radius: ${DEFAULT_RADIUS_VALUE * 3}px;
            border-bottom-right-radius: ${DEFAULT_RADIUS_VALUE * 3}px;
          }

          html.pixel-ratio-4 & {
            border-top-right-radius: ${DEFAULT_RADIUS_VALUE * 4}px;
            border-bottom-right-radius: ${DEFAULT_RADIUS_VALUE * 4}px;
          }
        }
      }

      &.${UI_NAME}-button-round {
        &:first-child {
          &::after {
            border-top-left-radius: ${ROUND_RADIUS};
            border-bottom-left-radius: ${ROUND_RADIUS};

            html.pixel-ratio-2 & {
              border-top-left-radius: ${ROUND_RADIUS_VALUE * 2}px;
              border-bottom-left-radius: ${ROUND_RADIUS_VALUE * 2}px;
            }

            html.pixel-ratio-3 & {
              border-top-left-radius: ${ROUND_RADIUS_VALUE * 3}px;
              border-bottom-left-radius: ${ROUND_RADIUS_VALUE * 3}px;
            }

            html.pixel-ratio-4 & {
              border-top-left-radius: ${ROUND_RADIUS_VALUE * 4}px;
              border-bottom-left-radius: ${ROUND_RADIUS_VALUE * 4}px;
            }
          }
        }

        &:last-child {
          &::after {
            border-top-right-radius: ${ROUND_RADIUS};
            border-bottom-right-radius: ${ROUND_RADIUS};

            html.pixel-ratio-2 & {
              border-top-right-radius: ${ROUND_RADIUS_VALUE * 2}px;
              border-bottom-right-radius: ${ROUND_RADIUS_VALUE * 2}px;
            }

            html.pixel-ratio-3 & {
              border-top-right-radius: ${ROUND_RADIUS_VALUE * 3}px;
              border-bottom-right-radius: ${ROUND_RADIUS_VALUE * 3}px;
            }

            html.pixel-ratio-4 & {
              border-top-right-radius: ${ROUND_RADIUS_VALUE * 4}px;
              border-bottom-right-radius: ${ROUND_RADIUS_VALUE * 4}px;
            }
          }
        }
      }
    }
  }
`

export {
  StyledButton,
  StyledThinWrap,
  StyledSegmented
}
