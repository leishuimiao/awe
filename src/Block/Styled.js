import styled, { css } from 'styled-components'
import theme, { mainPadding, borderColor } from '../Theme'
import retinaline, { removeRetinaline } from '../styles/retinaline'

const strong = css`
  &.${UI_NAME}-block-strong {
    position: relative;
    padding: ${mainPadding};
    color: #000;
    background: #fff;
    ${retinaline('top', borderColor)}
    ${retinaline('bottom', borderColor)}
  }
`

const inset = css`
  &.${UI_NAME}-inset {
    margin-left: ${mainPadding};
    margin-right: ${mainPadding};
    border-radius: 7px;
    ${removeRetinaline('top')}
    ${removeRetinaline('bottom')}
  }
`

const StyledBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  padding: 0 ${mainPadding};
  margin: 35px 0;
  color: ${theme.grey};
  text-align: justify;
  word-break: break-all;

  > p:first-child {
    margin-top: 0;
  }

  > p:last-child {
    margin-bottom: 0;
  }
  
  .${UI_NAME}-block-header, .${UI_NAME}-block-footer {
    margin-top: 0;
    padding: 0;
  }

  + .${UI_NAME}-block-footer {
    margin-top: -25px;
    margin-bottom: 35px;
  }
  ${strong}
  ${inset}
`

const StyledBlockTitle = styled.div.attrs({
  className: `${UI_NAME}-block-title`
})`
  position: relative;
  overflow: hidden;
  margin: 35px ${mainPadding} 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 17px;
  font-size: 14px;
  text-transform: uppercase;
  color: ${theme.grey};

  + ${StyledBlock}, + .${UI_NAME}-list {
    margin-top: 10px;
  }
`
const StyledBlockHeader = styled.div.attrs({
  className: `${UI_NAME}-block-header`
})`
  padding: 0 ${mainPadding};
  margin-top: 35px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #8f8f94;

  p:first-child:last-child {
    margin-top: 0;
    margin-bottom: 0;
  }

  + ${StyledBlock} {
    margin-top: 0;
  }
`
const StyledBlockFooter = styled.div.attrs({
  className: `${UI_NAME}-block-footer`
})`
  padding: 0 ${mainPadding};
  margin-top: 10px;
  font-size: 14px;
  color: #8f8f94;

  p:first-child:last-child {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export {
  StyledBlock,
  StyledBlockTitle,
  StyledBlockHeader,
  StyledBlockFooter
}
