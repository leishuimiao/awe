import styled from 'styled-components'
import { grey, mainPadding } from '../Theme'

const StyledBlock = styled.div.attrs({
  className: `${UI_NAME}-block`
})`
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  padding: 0 ${mainPadding};
  margin: 35px 0;
  color: ${grey};
  text-align: justify;

  p:first-child {
    margin-top: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
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
  color: ${grey};

  + ${StyledBlock}, + .${UI_NAME}-list {
    margin-top: 10px;
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
  StyledBlockFooter
}
