import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const navStyles = {
  width: '100%',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
};

const NavBar = () => {
  return (
    <div style={navStyles}>
      <h1>NavBar</h1>
      <div>
        <Button secondary as={Link} to='/login'>
          Login
        </Button>
        <Button secondary as={Link} to='/register'>
          Register
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
