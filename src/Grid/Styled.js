import styled, { css } from 'styled-components'
import retinaline from '../styles/retinaline'
import { borderColor } from '../Theme'

const width = ({ noGap, width: w, gap: g, childAmt }, otherWidth) => {
  const gap = noGap ? 0 : g
  const width = otherWidth || w || (100 / childAmt)
  const cssWidth = `width: ${width}%;`
  if (noGap) return cssWidth
  return `
    ${cssWidth}
    width: calc((100% - ${gap}px*${100 / width - 1}) * ${width / 100});
  `
}
const tabletWidth = ({ tabletWidth, ...rest }) => tabletWidth ? `
  @media (min-width: 768px) {
    ${width({ ...rest }, tabletWidth)}
  }
` : ''

const box = props => props.isBox && css`
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  &::after {
    display: block;
    content: " ";
    padding-bottom: 100%;
  }
`

const StyledRow = styled.div`
  display: flex;
  justify-content: ${props => props.isBox ? 'flex-start' : 'space-between'};
  flex-wrap: wrap;
  align-items: flex-start;

  ${props => props.isBox && css`
    position: relative;
    overflow: hidden;
    
    ${retinaline('top', borderColor)}
  `}
`

const StyledCol = styled.div.attrs({
  className: `${UI_NAME}-col`
})`
  ${width}
  box-sizing: border-box;
  ${tabletWidth}
  ${box}
`

const StyledColInner = styled.div.attrs({
  className: `${UI_NAME}-col-inner`
})`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 14;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${retinaline('left', borderColor)}
  ${retinaline('bottom', borderColor)}
`

export {
  StyledRow,
  StyledCol,
  StyledColInner
}
