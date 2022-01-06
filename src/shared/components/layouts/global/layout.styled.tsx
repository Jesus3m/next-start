import styled, { css } from 'styled-components'

export const MainContent = styled.main<{show: boolean, theme: { transition: { fast: string }}}>`
  position: fixed;
  top: 50px;
  right: 0px;
  height: calc(100vh - 50px);
  width: ${({ show }) => show ? '75vw' : 'calc(100vw - 60px)'};
  transition: ${({ theme }) => theme.transitions.fast && css(theme.transitions.fast)};
  z-index: 10;
  padding: 15px;
`
