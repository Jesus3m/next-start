import styled, { css } from 'styled-components'

export const SideBar = styled.aside<any>`
    top: 0;
    left: 0;
    position: fixed;
    z-index: 500;
    width: ${({ show }) => show ? '25vw' : '60px'};
    height: 100vh;
    padding: 60px 0px 10px 0px;
    background: ${({ theme }) => theme.backgrounds.dark};
    transition: ${({ theme }) => theme.transitions.fast && css(theme.transitions.fast)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

`
export const NavLink = styled.a<any>`
    color: white !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 20px;
    cursor: pointer;
`
export const TextNav = styled.span<any>`
    display: block;
    height: 25px;
    white-space: nowrap;
    width: ${({ show }) => show ? '85%' : '0px'};
    overflow: hidden;
    padding-left: ${({ show }) => show ? '30px' : '0px'};
    /* opacity: 0; */
    visibility:${({ show }) => show ? 'visible' : 'hidden'};
`

export const SubModuleMenu = styled.section<any>`
    top: 0;
    left: 0;
    position: fixed;
    z-index: 550;
    width: 25vw;
    height: 100vh;
    padding: 60px 0px 10px 0px;
    /* background:  ${({ theme }) => theme.backgrounds.light}; */
    background: rgba(0,0,0,.6);
    backdrop-filter: blur(15px);
    transition: ${({ theme }) => theme.transitions.fast && css(theme.transitions.fast)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(-25vw)'} ;
`
export const SideSubMenu = styled.section<any>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 15px;
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100vh;
    background:${({ theme }) => theme.backgrounds.dark} ;
    cursor: pointer;
`
