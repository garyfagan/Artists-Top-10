import React from 'react';
import { render } from '@testing-library/react';

import LoginButton from './LoginButton';

it('renders the Login text', () => {
  const { getByText } = render(<LoginButton />);
  expect(getByText('Login')).toBeInTheDocument();
});

it('renders the Login text', () => {
  const { getByText } = render(<LoginButton />);
  expect(getByText('Login')).toHaveAttribute('href', 'https://accounts.spotify.com/authorize?client_id=256408cb74414ae4ab87f13514ae9d4d&redirect_uri=SPOTIFY_REDIRECT_URI&response_type=token');
});
