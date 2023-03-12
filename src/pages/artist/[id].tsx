import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Alert, Button, Grid } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';

import AppBar from '@/components/AppBar/AppBar';
import Card from '@/components/Card/Card';
import useGetToken from '@/hooks/useGetToken';
import useFetchTracks from '@/hooks/useFetchTracks';

const Tracks = () => {
  const router = useRouter();
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const token = useGetToken();
  const { data, error } = useFetchTracks(router.query.id, token);
  
  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      <AppBar />
      {error && <Alert severity="error">{error?.message}</Alert>}
      {data && activeTrack && (
        <ReactAudioPlayer
          src={activeTrack}
          autoPlay
          onEnded={() => setActiveTrack('')}
        />
      )}
      {data && (
        <Grid container spacing={3}>
          {data.map((track) => (
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
      )}
    </>
  )
}

export default Tracks;