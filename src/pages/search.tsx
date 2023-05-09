import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Alert, Grid, Typography, colors } from '@mui/material';

import Card from '@/components/Card/Card';
import useFetchArtists from '@/hooks/useFetchArtists';
import useGetToken from '@/hooks/useGetToken';

const Search = () => {
  const router = useRouter();
  const token = useGetToken();
  const { data, error } = useFetchArtists(router?.query?.artist, token);

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      {error && <Alert severity="error">{error.message}</Alert>}
      {data && data.items.length < 1 && (
        <Alert severity="info">No tracks found.</Alert>
      )}
      {data && data.items.length > 1 && (
        <Grid container spacing={5}>
          {data?.items?.map((artist) => (
            <Grid key={artist.id} item xs={12} sm={6} md={4} lg={3}>
              <Card href={`/artist/${artist.id}`} image={{ alt: `Artwork for ${artist.name}`, path: artist?.images[1]?.url }}>
                <Typography color={colors.common.white} variant="body1">{artist.name}</Typography>
                <Typography color={colors.grey[500]} variant="body1">Artist</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Search;