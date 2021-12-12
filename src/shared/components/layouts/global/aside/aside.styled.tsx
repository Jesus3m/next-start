import styled, { css } from 'styled-components';

export const SideBar = styled.aside<any>`
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    padding: 10px;
    width: ${({ width }) => width ? `${width}px` : '60px'};
    background: ${({theme}) => theme.backgrounds.dark};
    transition: ${({theme}) => theme.transitions.fast && css(theme.transitions.fast)};
    z-index: 500

`
export const DragResize = styled.span<any>`
    display: block;
    height: 100vh;
    transform: none !important;
    width: 5px;
    position: absolute;
    right: ${({ right }) => right ? `-${right}px` : '0px'};
    top: 0px;
    cursor: e-resize;
    z-index: 999
`
