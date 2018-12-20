import styled from 'styled-components'
import { loadingAnimate } from '../styles/animation'

export const StyledIcon = styled.i.attrs({
  className: `${UI_NAME}-icon`
})`
  display: inline-block;
  vertical-align: middle;
  font-size: 0;

  ${props => (props.type === 'loading') && loadingAnimate}
`
