import styled, { css } from 'styled-components'
import { loadingAnimate } from '../styles/animation'

export const StyledIcon = styled.i.attrs({
  className: `${UI_NAME}-icon`
})`
  display: inline-block;
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    line-height: ${size}px;
  `}
  vertical-align: middle;
  font-size: 0;
`

export const StyledLoading = styled.span`
  position: relative;
  display: inline-block;
  ${loadingAnimate}
  
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
