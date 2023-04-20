import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Alert, Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';

import AppBar from '@/components/AppBar/AppBar';
import useFetchArtists from '@/hooks/useFetchArtists';
import useGetToken from '@/hooks/useGetToken';

const Search = () => {
  const router = useRouter();
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
        <List dense={true}>
          {data?.items?.map((artist) => (
            <ListItem
              key={artist.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => selectTopTracks(artist.id)}>
                  <ArrowRightIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar src={artist?.images[1]?.url} variant="square" />
              </ListItemAvatar>
              <ListItemText primary={artist.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export default Search;