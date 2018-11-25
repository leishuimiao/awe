import styled from 'styled-components'

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

const StyledRow = styled.div.attrs({
  className: `${UI_NAME}-row`
})`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`

const StyledCol = styled.div.attrs({
  className: `${UI_NAME}-col`
})`
  ${width}
  box-sizing: border-box;
  ${tabletWidth}
`

export {
  StyledRow,
  StyledCol
}
