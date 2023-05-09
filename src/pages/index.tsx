import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import LoginButton from '@/components/LoginButton/LoginButton';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <Box sx={{ textAlign: 'center', margin: '100px auto 0', width: 250 }}>
        <img src='/spotify-logo.png' alt='logo' width="140px" />
        <LoginButton />
      </Box>
    </>
  );
};

export default Home;