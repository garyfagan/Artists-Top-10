import React from 'react';
import { useRouter } from "next/router";

import { fireEvent, render } from '@testing-library/react';

import LogoutButton from './LogoutButton';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

it('renders the Logout aria label', () => {
  // ARRANGE/ACT
  const { getByLabelText } = render(<LogoutButton />);

  // ASSERT
  expect(getByLabelText('Logout')).toBeInTheDocument();
});

it('navigates to the home page', () => {
  // ARRANGE
  const push = jest.fn();

  (useRouter as jest.Mock).mockImplementation(() => ({
    push,
  }));

  const { getByLabelText } = render(<LogoutButton />);
  const button = getByLabelText('Logout');

  // ACT
  fireEvent.click(button);

  // ASSERT
  expect(push).toHaveBeenCalledWith('/');
});
