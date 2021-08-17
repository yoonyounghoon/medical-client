import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type SidebarItemProps = {
  to: string;
  text: string;
};

function SidebarItem({ to, text }: SidebarItemProps) {
  return (
    <NavLink to={to}>
      <li className="item">
        <Text>{text}</Text>
      </li>
    </NavLink>
  );
}

export default SidebarItem;

const Text = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.mode.textColor};
`;
