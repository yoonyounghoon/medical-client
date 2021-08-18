import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from 'components/SidebarItem/SidebarItem';
import styled from 'styled-components';
import useDarkMode from 'hooks/useDarkMode';
import Button from 'components/Button';

type SidebarProps = {
  toggleTheme: () => void;
};

function Sidebar({ toggleTheme }: SidebarProps) {
  return (
    <StyleSideBar>
      <NavLink to="/">
        <Title>MEDICAL-HELPER</Title>
      </NavLink>
      <ToggleBtn onClick={toggleTheme}>다크모드</ToggleBtn>
      <SidebarList>
        <SidebarItem text="병원찾기" to="/medical-client" />
        <SidebarItem text="약국찾기" to="/pharmacy" />
      </SidebarList>
    </StyleSideBar>
  );
}

export default Sidebar;

const StyleSideBar = styled.nav`
  padding: 1rem;
  padding-bottom: 0;
`;

const SidebarList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.mode.textColor};
  text-align: center;
  text-decoration: none;
`;

const ToggleBtn = styled(Button)`
  position: absolute;
  top: 18px;
  right: 16px;
  width: 100px;
  height: 30px;
  border: 2px solid #dbdbdb;
  font-weight: bold;
  background: ${(props) => props.theme.mode.mainBackground};
  color: ${(props) => props.theme.mode.textColor};
`;
