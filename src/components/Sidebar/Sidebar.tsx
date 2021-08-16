import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarItem from 'components/SidebarItem/SidebarItem';
import styled from 'styled-components';

function Sidebar() {
  return (
    <StyleSideBar>
      <StyledLink to="/">
        <Title>MEDICAL-HELPER</Title>
      </StyledLink>
      <SidebarList>
        <SidebarItem text="병원찾기" to="/" />
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
  color: #3095e9;
  text-align: center;
  text-decoration: none;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
