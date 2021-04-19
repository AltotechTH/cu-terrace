import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: #ffff;
`;

export const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: #ffff;
    position: fixed;
    top: 5rem;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
`;

export const NavIcon = styled(Link) <any>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

export const LabelName = styled.div`
    display: block;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
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
    height: 60px;
    margin-right: 2rem;
    color: black;
`

export const SidebarWrap = styled.div``;


export const SidebarLink = styled(Link) <any>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1rem;
    padding: 2rem;
    text-decoration: none;
    color : black;
    &:hover {
        /* background-color: #ffff; */
        border-left: 4px solid #4293ee;
    }
`;

export const SidebarLabel = styled.span`
    margin-left: 1rem;
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
