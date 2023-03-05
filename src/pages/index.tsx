import React from 'react';
import Head from 'next/head';

import AppBar from '@/components/AppBar/AppBar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <AppBar />
    </>
  )
}

export default Home;