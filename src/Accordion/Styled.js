import styled from 'styled-components'

export const StyledAccordion = styled.div.attrs({
  className: `${UI_NAME}-accordion`
})`

`

export const StyledAccordionItem = styled.div.attrs({
  className: `${UI_NAME}-accordion-item`
})`

`

export const StyledAccordionToggle = styled.div.attrs({
  className: `${UI_NAME}-accordion-toggle`
})`
  cursor: pointer;
`

export const StyledAccordionContent = styled.div.attrs({
  className: `${UI_NAME}-accordion-content`
})`
  position: relative;
  overflow: hidden;
  height: 0;
  font-size: 14px;
  transition-duration: .3s;
`
