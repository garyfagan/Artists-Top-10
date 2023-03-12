import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  return (
    <IconButton aria-label="Logout" onClick={() => {
      window.localStorage.removeItem("token");
      router.push('/');
    }}>
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;