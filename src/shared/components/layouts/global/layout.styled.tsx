import styled, { css } from 'styled-components'

export const MainContent = styled.main<any>`
  position: fixed;
  top: 50px;
  right: 0px;
  height: calc(100vh - 50px);
  width: ${({ width }) => width ? `calc(100vw - ${width || 60}px)` : 'calc(100vw - 60px)'};
  transition: ${({ theme }) => theme.transitions.fast && css(theme.transitions.fast)};
  z-index: 10;
  padding: 15px;
`
