import styled, { css } from 'styled-components'
import { mainPadding } from '../Theme'

const top = css`
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px ${mainPadding};
`

const center = css`
  display: table;
  top: 50%;
  left: 50%;
  max-width: 270px;
  padding: ${mainPadding};
  transform: translate(-50%, -50%);
  border-radius: 8px;
`

const bottom = css`
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding: 12px ${mainPadding};
  justify-content: space-between;
  align-items: center;
`

const positionCSS = { top, center, bottom }

export const StyledToast = styled.div.attrs({
  className: `${UI_NAME}-toast`
})`
  position: absolute;
  z-index: 100000;
  display: block;
  box-sizing: border-box;
  padding: 12px ${mainPadding};
  color: #fff;
  background: rgba(0, 0, 0, .75);

  ${props => positionCSS[props.position]}

  > div {
    &:first-child {
      margin-right: 12px;
    }
  }
`

export const StyledToastIcon = styled.div`
  margin-right: 0 !important;
  text-align: center;

  + div {
    margin-top: 5px;
  }
`
