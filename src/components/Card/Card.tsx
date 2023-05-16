import React from 'react';
import { Box, BoxProps, Link } from '@mui/material';
import NextLink from 'next/link';

import styles from './Card.s';

type Image = {
  alt: string;
  path: string;
};

type CardProps = {
  children: React.ReactNode;
  href?: string;
  image: Image;
} & BoxProps;

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