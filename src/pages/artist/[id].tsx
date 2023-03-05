import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Alert, Button, Grid } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import { getSession } from "next-auth/react";

import AppBar from '@/components/AppBar/AppBar';
import Card from '@/components/Card/Card';
import { Results } from '@/types/tracks';
import CustomFetch from '@/helpers/CustomFetch';
import RedirectUnauthenticatedUser from '@/helpers/RedirectUnauthenticatedUser';

const Artist = ({ results: { tracks, error } }: Results) => {
  const [activeTrack, setActiveTrack] = useState('');

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <AppBar />
      {error && <Alert severity="error">{error?.message}</Alert>}
      {tracks && (
        <>  
          <ReactAudioPlayer
            src={activeTrack}
            autoPlay
            onEnded={() => setActiveTrack('')}
          />
          <Grid container spacing={3}>
            {
              tracks.map((track) => (
                <Grid key={track.id} item xs={12} sm={6}>
                  <Card
                    description={track.artists[0].name}
                    actions={(
                      <>
                        <Button
                          size="small"
                          onClick={() => activeTrack !== track.preview_url ? setActiveTrack(track.preview_url) : setActiveTrack('')}
                        >
                          {activeTrack !== track.preview_url ? 'Play' : 'Stop'}
                        </Button>
                      </>
                    )}
                    image={track?.album?.images[1].url}
                    title={track.name}
                  >
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const session = await getSession({ req });
  if (!session) return RedirectUnauthenticatedUser;
  const results = await CustomFetch(`artists/${query?.id}/top-tracks?market=gb`, session);

  return {
    props: {
      results,
    }
  }
};

export default Artist;