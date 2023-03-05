import React from 'react';
import { Button } from '@mui/material';
import { signIn } from "next-auth/react";

const LoginButton: React.FC = () => (
  <Button onClick={() => signIn("spotify")} variant="contained">
    Login to Spotify
  </Button>
);

export default LoginButton;