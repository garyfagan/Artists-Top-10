import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Alert, Grid, IconButton, Typography, colors } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import Card from '@/components/Card/Card';
import useGetToken from '@/hooks/useGetToken';
import useFetchTrack from '@/hooks/useFetchTrack';
import { listArtists } from '@/helpers/ListArtists';
import Button from '@/components/Button/Button';

const Tracks = () => {
  const router = useRouter();
  const token = useGetToken();  
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const { data, error } = useFetchTrack(router.query.id, token);

  return (
    <>
      <Head>
        <title>Spotify Track Popularity</title>
      </Head>
      {error && <Alert severity="error">{error?.message}</Alert>}
      {data && activeTrack && (
        <ReactAudioPlayer
          src={activeTrack}
          autoPlay
          onEnded={() => setActiveTrack('')}
        />
      )}
      {data && (
        <Card width={320} image={{ alt: `Artwork for ${data?.album?.name}`, path: data?.album?.images[1].url }}>
          <Typography color={colors.common.white} variant="body1">{data.name}</Typography>
          <Typography color={colors.grey[500]} variant="body1">{listArtists(data.artists)}</Typography>
          <Typography color={colors.grey[500]} variant="body1">{data?.album?.name}</Typography>
          <Grid container justifyContent="center">
            <Grid item>
              <IconButton
                disableRipple
                onClick={() => activeTrack !== data.preview_url ? setActiveTrack(data.preview_url) : setActiveTrack('')}
                sx={{
                  background: colors.common.white,
                  color: colors.common.black,
                  margin: '10px 0',
                }}
              >
                {activeTrack !== data.preview_url ? <PlayArrowIcon /> : <StopIcon />}
              </IconButton>
            </Grid>
          </Grid>
          <Button component="a" href={data.album.external_urls.spotify}>
            Get Spotify Free
          </Button>
        </Card>
      )}
    </>
  );
};

export default Tracks;