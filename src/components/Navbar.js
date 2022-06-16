import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import { margin } from '@mui/system';
import StylesNavbar from './Navbar.module.css';
function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent={'space-around'}
      sx={{
        gap: { sm: '122pz', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', margin: '0 20px' }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize={'24px'} alignItems="flex-end">
        <Link
          to="/"
          className={`${StylesNavbar.navbarLink} ${StylesNavbar.navbarLinkBorder}`}
        >
          Home
        </Link>
        <a href="#exercises" className={StylesNavbar.navbarLink}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
