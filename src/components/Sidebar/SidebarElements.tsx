import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    background-color: #ffff;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 64px;
    background-color: #ffff;
`

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 74px;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    top: 80px;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    /* border-right: 0.1px solid gray; */
    z-index: 999;
`;

export const NavIcon = styled(Link) <any>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 80px;
    font-size: 2rem;
    margin-left: 2rem;
`;

export const LabelName = styled.div`
    display: block;
    justify-content: flex-start;
    align-items: center;
    height: 56px;
    font-size: 1.3rem;
    margin-left: 2rem;
    color: black;
    width: 100%;
`

export const NavItems = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    /* margin-right: 2rem; */
    color: black;
`

export const SidebarWrap = styled.div``;


export const SidebarLink = styled(Link) <any>`
    display: unset;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    font-size: 1rem;
    padding: 1rem;
    text-decoration: none;
    color : black;
    text-align: center;
    /* &:hover {
        background-color: #ffff;
        border-left: 4px solid #4293ee;
    } */
`;

export const SidebarLabel = styled.span`

    font-size: 8px;
    width: 74px;
    text-align: center
`;

export const DropdownLink = styled(Link) <any>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1rem;
    padding-left: 3rem;
    text-decoration: none;
    color: black;
    &:hover {
        background-color: #4293ee;
    }
`;
