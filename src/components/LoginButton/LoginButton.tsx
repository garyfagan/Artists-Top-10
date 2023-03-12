import React from 'react';
import { Button } from '@mui/material';

const LoginButton: React.FC = () => (
  <Button
    href={`${process.env.SPOTIFY_AUTH_ENDPOINT}?client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&response_type=${process.env.SPOTIFY_RESPONSE_TYPE}`}
    variant="contained"
  >
    Login to Spotify
  </Button>
);

export default LoginButton;