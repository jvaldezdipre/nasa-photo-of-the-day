import React from 'react';
import Links from './LinksComponent';
import { Navbar } from 'reactstrap';

function NavMain() {
  return (
    <div>
      <Navbar color='primary'>
        <Links />
      </Navbar>
    </div>
  );
}

export default NavMain;
