import styled from 'styled-components'
import retinaline from '../styles/retinaline'
import { borderColor, shortPadding } from '../Theme'

const toolbarHeight = '44px'

export const StyledToolbar = styled.div.attrs({
  className: `${UI_NAME}-toolbar`
})`
  position: absolute;
  left: 0;
  ${props => `${props.position}: 0;`}
  z-index: 500;
  width: 100%;
  height: ${toolbarHeight};
  font-size: 17px;
  background-color: #fff;

  &.${UI_NAME}-toolbar-top {
    ${retinaline('bottom', borderColor)}

    ~ .${UI_NAME}-page-content {
      padding-top: ${toolbarHeight};
    }
  }

  &.${UI_NAME}-toolbar-bottom {
    ${retinaline('top', borderColor)}

    ~ .${UI_NAME}-page-content {
      padding-bottom: ${toolbarHeight};
    }
  }
`

export const StyledToolbarInner = styled.div.attrs({
  className: `${UI_NAME}-toolbar-inner`
})`
  display: flex;
  height: 100%;
  padding: 0 ${shortPadding};
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  align-content: center;

  a {
    position: relative;
    height: ${toolbarHeight};
    box-sizing: border-box;
    flex-shrink: 1;
    line-height: ${toolbarHeight};
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
