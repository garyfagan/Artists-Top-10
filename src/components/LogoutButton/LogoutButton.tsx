import React from 'react';
import { IconButton } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { signOut } from 'next-auth/react';

const LogoutButton: React.FC = () => (
  <IconButton aria-label="Logout" onClick={() => signOut()}>
    <LogoutIcon />
  </IconButton>
);

export default LogoutButton;