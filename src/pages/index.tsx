import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

import LoginButton from '@/components/LoginButton/LoginButton';

const styles = {
  display: 'flex',
  flexDirection:' column',
  justifyContent:' center',
  alignItems:' center',
  height: '100vh',
  width: '250px',
  margin: '0 auto',
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <Box sx={styles}>
        <img src='https://garyfagan.github.io/Spotify-Top-Ten/spotify-logo.png' alt='logo' width="140px" />
        <LoginButton />
      </Box>
    </>
  );
};

export default Home;