import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

type ButtonProps = {
  component?: React.ElementType;
} & MuiButtonProps;

const styles = {
  background: '#1ED760',
  color: '#000',
  width: '100%',
  borderRadius: '19px',
  margin: '10px 0 0',
  textTransform: 'uppercase',
  '&:hover:active': {
    background: '#169C46',
  },
  '&:hover': {
    background: '#1ED760',
    color: '#000',
    transform: 'scale(1.04)'
  }
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MuiButton disableRipple sx={styles} {...props}>
    {children}
  </MuiButton>
);

export default Button;