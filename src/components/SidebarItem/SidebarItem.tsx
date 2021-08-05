import React from 'react';
import { NavLink } from 'react-router-dom';

type SidebarItemProps = {
  to: string;
  text: string;
};

function SidebarItem({ to, text }: SidebarItemProps) {
  return (
    <NavLink to={to}>
      <li className="item">
        <span>{text}</span>
      </li>
    </NavLink>
  );
}

export default SidebarItem;
