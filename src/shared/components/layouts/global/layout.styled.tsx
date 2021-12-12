import styled, { css } from 'styled-components';

export const MainContent = styled.main<any>`
  position: fixed;
  height: calc(100vh - 50px);
  top: 50px;
  right: 0px;
  width: ${({ width }) => width ? `calc(100vw - ${width || 60}px)` : 'calc(100vw - 60px)'};
  transition: ${({theme}) => theme.transitions.fast && css(theme.transitions.fast)};
  z-index: 10
`
