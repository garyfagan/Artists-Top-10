import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

it('renders the button text', () => {
  const { getByText } = render(<Button>Button</Button>);
  expect(getByText('Button')).toBeInTheDocument();
});