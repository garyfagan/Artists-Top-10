import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

import styles from './Button.s';

type ButtonProps = {
  component?: React.ElementType;
} & MuiButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MuiButton disableRipple sx={styles} {...props}>
    {children}
  </MuiButton>
);

export default Button;