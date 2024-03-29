import React from 'react';
import Button from '../Button/Button';

const LoginButton: React.FC = () => (
  <Button
    href={`https://accounts.spotify.com/authorize?client_id=256408cb74414ae4ab87f13514ae9d4d&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&response_type=token`}
  >
    Login
  </Button>
);

export default LoginButton;