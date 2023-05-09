import React from 'react';
import { Box, BoxProps, Link } from '@mui/material';
import NextLink from 'next/link';

type Image = {
  alt: string;
  path: string;
};

type CardProps = {
  children: React.ReactNode;
  href?: string;
  image: Image;
} & BoxProps;

const styles = {
  backgroundColor: '#0B0B0B',
  borderRadius: 2,
  padding: 2,
  transition: 'background-color 250ms',
  '&:hover': {
    backgroundColor: '#222',
  }
};

const IMAGE_NOT_FOUND = 'https://dummyimage.com/240x240/000000/ffffff&text=Image+not+available';

const Card: React.FC<CardProps> = ({ children, href, image, ...props }) => (
  <Box sx={styles} {...props}>
    <Link component={href ? NextLink : 'div'} href={href} underline="none">
      <img
        src={image.path || IMAGE_NOT_FOUND}
        alt={image.alt}
        width="100%"
      />
      <Box mt={1}>{children}</Box>
    </Link>
  </Box>
);

export default Card;