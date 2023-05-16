import React from 'react';
import { useRouter } from "next/router";

import { fireEvent, render } from '@testing-library/react';

import Search from './Search';

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

it('navigates to the search page', () => {
  // ARRANGE
  const push = jest.fn();

  (useRouter as jest.Mock).mockImplementation(() => ({
    push,
  }));

  const { getByLabelText } = render(<Search />);

  const input = getByLabelText('search');

  // ACT
  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.submit(input);
  
  // ASSERT
  expect(push).toHaveBeenCalledWith('/search?artist=test');
});