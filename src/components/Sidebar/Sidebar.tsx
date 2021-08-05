import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SidebarItem from 'components/SidebarItem/SidebarItem';
import styled from 'styled-components';

function Sidebar() {
  return (
    <StyleSideBar>
      <StyledLink to="/">
        <Title>MEDICAL-HELPER</Title>
      </StyledLink>
      <SidebarList>
        <SidebarItem text="Medical-Check" to="/" />
        <SidebarItem text="COVID-19" to="/covid" />
        <SidebarItem text="Pharmacy" to="/pharmacy" />
      </SidebarList>
    </StyleSideBar>
  );
}

export default Sidebar;

const StyleSideBar = styled.nav`
  padding: 1rem;
`;

const SidebarList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
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
