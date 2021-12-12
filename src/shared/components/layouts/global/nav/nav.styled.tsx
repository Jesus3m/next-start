import styled, { css } from 'styled-components';

export const TopNav = styled.nav<any>`
    top: 0;
    right: 0;
    position: fixed;
    height: 50px;
    padding: 10px;
    width: ${({ width }) => width ? `calc(100vw - ${width || 60}px)` : 'calc(100vw - 60px)'};
    background: ${({theme}) => theme.backgrounds.light};
    transition: ${({theme}) => theme.transitions.fast && css(theme.transitions.fast)};
    z-index: 20

`
