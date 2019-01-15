import { css } from 'styled-components'
import { getUnitObj } from '../utils/utils'

export default function drop (position, size, color) {
  let result = ''
  const unitObj = getUnitObj(size)
  const sizeHalf = unitObj.number / 2 + unitObj.unit
  const commonCSS = (style, pseudoClass) => {
    return css`
    &:${pseudoClass} {
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      border-style: solid;
      ${style}
      content: '';
      pointer-events: none;
    }
  `
  }
  switch (position) {
    case 'top':
      result = commonCSS(css`
        right: ${sizeHalf};
        margin-top: -${sizeHalf};
        border-width: 0 ${size} ${size} ${size};
        border-color: transparent transparent ${color} transparent;
      `, 'before')
      break
    case 'right':
      result = commonCSS(css`
        right: ${size};
        margin-top: -${size};
        border-width: ${size} 0 ${size} ${size};
        border-color: transparent transparent transparent ${color};
      `, 'after')
      break
    case 'bottom':
      result = commonCSS(css`
        right: ${sizeHalf};
        margin-top: -${sizeHalf};
        border-width: ${size} ${size} 0 ${size};
        border-color:  ${color} transparent transparent transparent;
      `, 'after')
      break
    case 'left':
      result = commonCSS(css`
        right: ${size};
        margin-top: -${size};
        border-width: ${size} ${size} ${size} 0;
        border-color: transparent ${color} transparent transparent;
      `, 'before')
      break
  }
  return result
}
