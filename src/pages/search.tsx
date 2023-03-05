import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Alert, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { getSession } from "next-auth/react";

import { Results } from '@/types/artists';
import AppBar from '@/components/AppBar/AppBar';
import Card from '@/components/Card/Card';
import CustomFetch from '@/helpers/CustomFetch';
import RedirectUnauthenticatedUser from '@/helpers/RedirectUnauthenticatedUser';

const Search = ({ results: { artists, error } }: Results) => {
  const router = useRouter();

  const selectTopTracks = (id: string) => {
    router.push(`/artist/${id}`);
  };

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <AppBar />
      <>
        {error && <Alert severity="error">{error?.message}</Alert>}
        {artists && (
          <>
            {artists?.items?.length < 1 && (
              <Grid container direction="column" alignItems="center" spacing={2}>
                <Grid item>
                  <Typography color="text.secondary">No results found</Typography>
                </Grid>
              </Grid>
            )}
            {artists?.items?.length > 0 && (
              <Grid container spacing={3}>
                {artists?.items?.map((artist) => (
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
        )}
      </>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const session = await getSession({ req });
  if (!session) return RedirectUnauthenticatedUser;
  const results = await CustomFetch(`search?q=${query.artist}&market=gb&type=artist&limit=10`, session);

  return {
    props: {
      results,
    }
  }
};

export default Search;