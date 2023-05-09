import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Alert, Grid, Typography, colors } from '@mui/material';

import Card from '@/components/Card/Card';
import useGetToken from '@/hooks/useGetToken';
import useFetchTracks from '@/hooks/useFetchTracks';
import { listArtists } from '@/helpers/ListArtists';

const Tracks = () => {
  const router = useRouter();
  const token = useGetToken();
  const { data, error } = useFetchTracks(router.query.id, token);

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      {error && <Alert severity="error">{error?.message}</Alert>}
      {data && data?.length < 1 && (
        <Alert severity="info">No tracks found.</Alert>
      )}
      {data && data?.length > 0 && (
        <Grid container spacing={5}>
          {data.map((track) => (
            <Grid key={track.id} item xs={12} sm={6} md={4} lg={3}>
              <Card href={`/track/${track?.id}`} image={{ alt: `Artwork for ${track?.album?.name}`, path: track?.album?.images[1].url }}>
                <Typography color={colors.common.white} variant="body1">{track.name}</Typography>
                <Typography color={colors.grey[500]} variant="body1">{listArtists(track.artists)}</Typography>
                <Typography color={colors.grey[500]} variant="body1">{track?.album?.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Tracks;