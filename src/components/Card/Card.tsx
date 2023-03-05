import React from 'react';
import {
  Box,
  Card as MuiCard,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from '@mui/material';

type CardProps = {
  description?: string;
  image: string;
  title: string;
  children: JSX.Element | JSX.Element[];
  actions?: JSX.Element | JSX.Element[];
}

const Card: React.FC<CardProps> = ({ actions, description, children, image, title }) => {
  return (
    <MuiCard sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" mb={1} variant="h5">{title}</Typography>
          {description && (
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {description}
            </Typography>
          )}
          {children}
        </CardContent>
        {actions && (<CardActions>{actions}</CardActions>)}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={image}
      />
    </MuiCard>
  )
}

export default Card;