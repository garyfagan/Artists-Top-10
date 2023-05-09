import React from 'react';
import Head from 'next/head';

import useSetToken from '@/hooks/useSetToken';
import { Typography } from '@mui/material';

const Search = () => {
  useSetToken();

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <Typography align="center" mt={2}>Redirecting you...</Typography>
    </>
  );
};

export default Search;