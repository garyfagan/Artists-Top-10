import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Alert, Button, Chip, Grid, Stack, Typography } from '@mui/material';

import AppBar from '@/components/AppBar/AppBar';
import Card from '@/components/Card/Card';
import useFetchArtists from '@/hooks/useFetchArtists';
import useSetToken from '@/hooks/useSetToken';
import useGetToken from '@/hooks/useGetToken';

const Search = () => {
  const router = useRouter();
  useSetToken();
  const token = useGetToken();
  const { data, error } = useFetchArtists(router?.query?.artist, token);

  const selectTopTracks = (id: string) => {
    router.push(`/artist/${id}`);
  };

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <AppBar />
      {error && <Alert severity="error">{error.message}</Alert>}
      {data && data.items.length < 1 && (
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <Typography color="text.secondary">No results found</Typography>
          </Grid>
        </Grid>
      )}
      {data && data.items.length > 1 && (
        <Grid container spacing={3}>
          {data?.items?.map((artist) => (
            <Grid key={artist.id} item xs={12} sm={6}>
              <Card
                actions={<Button size="small" onClick={() => selectTopTracks(artist.id)}>See top 10</Button>}
                image={artist?.images[1]?.url}
                title={artist.name}
              >
                <Stack direction="row" spacing={1}>
                  {artist.genres.slice(0, 3).map((genre) => <Chip key={genre} label={genre} />)}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Search;