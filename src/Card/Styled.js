import styled, { css } from 'styled-components'
import { mainPadding } from '../Theme'
import retinaline, { removeRetinaline } from '../styles/retinaline'

const borderRadius = '4px'

const commonStyle = css`
  position: relative;
  display: flex;
  box-sizing: border-box;
  min-height: 44px;
  padding: 10px ${mainPadding};
  align-items: center;
  justify-content: space-between;
`
const borderColor = '#e1e1e1'

export const StyledCard = styled.div.attrs({
  className: `${UI_NAME}-card`
})`
  position: relative;
  margin: ${mainPadding};
  border-radius: ${borderRadius};
  font-size: 14px;
  background: #fff;
  ${props => props.outline ? retinaline('round', '#ccc', borderRadius) : 'box-shadow: 0 1px 2px rgba(0,0,0,.3);'}

  .${UI_NAME}-block-title + & {
    margin-top: 10px;
  }
`

export const StyledCardHeader = styled.div.attrs({
  className: `${UI_NAME}-card-header`
})`
  ${commonStyle}
  border-radius: ${borderRadius} ${borderRadius} 0 0;
  font-size: 17px;

  ${retinaline('bottom', borderColor)}
`

export const StyledCardContent = styled.div.attrs({
  className: `${UI_NAME}-card-content`
})`
  padding: ${props => props.padding ? mainPadding : 0};

  .${UI_NAME}-list {
    margin: 0;

    ul {
      background: transparent;
      
      ${removeRetinaline('top')}
      ${removeRetinaline('bottom')}
      
      ${props => props.childRadius && css`
        border-radius: ${borderRadius};
        > li {

          &:first-child {
            .${UI_NAME}-item-content {
              border-top-left-radius: ${borderRadius};
              border-top-right-radius: ${borderRadius};
            }
          }

          &:last-child {
            .${UI_NAME}-item-content {
              border-bottom-left-radius: ${borderRadius};
              border-bottom-right-radius: ${borderRadius};
            }
          }
        }
      `}
    }
  }

  > p {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const StyledCardFooter = styled.div.attrs({
  className: `${UI_NAME}-card-footer`
})`
  ${commonStyle}
  color: #6d6d72;

  > a {
    height: 44px;
    margin-top: -10px;
    margin-bottom: -10px;
    line-height: 44px;
  }

  ${retinaline('top', borderColor)}
`
