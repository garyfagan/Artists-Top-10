import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Alert, Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListItemButton } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import AppBar from '@/components/AppBar/AppBar';
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
        <List dense={true}>
          {data.map((track) => (
            <ListItem
              key={track.id}
              disableGutters
              secondaryAction={
                <>
                  <IconButton disableRipple aria-label="delete" onClick={() => activeTrack !== track.preview_url ? setActiveTrack(track.preview_url) : setActiveTrack('')}>
                    {activeTrack !== track.preview_url ? <PlayArrowIcon /> : <StopIcon />}
                  </IconButton>
                  <IconButton disableRipple edge="end" aria-label="open" target="_blank" href={track?.album?.external_urls.spotify}>
                    <OpenInNewIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemButton disableRipple  onClick={() => activeTrack !== track.preview_url ? setActiveTrack(track.preview_url) : setActiveTrack('')}>
                <ListItemAvatar>
                  <Avatar src={track?.album?.images[1].url} variant="square" />
                </ListItemAvatar>
                <ListItemText primary={track.name} secondary={track.album.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export default Tracks;