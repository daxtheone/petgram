import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/Animation'

export const List = styled.ul`
  display:flex;
  //overflow: scroll;
  overflow: hidden;
  width: 100%;
  ${props => props.fixed && css`
  {
    ${fadeIn({ time: '2s' })}
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.6);
    z-index:1;

  }
  `}
`
export const Item = styled.li`
  padding: 0 8px;
`
