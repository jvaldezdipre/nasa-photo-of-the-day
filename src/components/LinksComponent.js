import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function LinksComponent() {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Mars</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default LinksComponent;
