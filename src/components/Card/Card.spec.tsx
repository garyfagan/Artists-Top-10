import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';

const image = {
  alt: 'alt text',
  path: 'http://image.com',
};

it('renders the children', () => {
  const { getByText } = render(<Card image={image}>Children</Card>);
  expect(getByText('Children')).toBeInTheDocument();
});

it('renders the image', () => {
  const { getByRole } = render(<Card image={image}>Children</Card>);
  expect(getByRole('img')).toBeInTheDocument();
  expect(getByRole('img')).toHaveAttribute('alt', 'alt text');
  expect(getByRole('img')).toHaveAttribute('src', 'http://image.com');
});

it('renders the link', () => {
  const { getByRole } = render(<Card image={image} href="http://href.com">Children</Card>);
  expect(getByRole('link')).toBeInTheDocument();
  expect(getByRole('link')).toHaveAttribute('href', 'http://href.com');
});