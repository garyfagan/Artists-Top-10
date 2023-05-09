import { useEffect, useState } from 'react';

import CustomFetch from '@/helpers/CustomFetch';
import { TrackResults } from '@/types/tracks';

const useFetchTracks = (artist: string | string[] | undefined, token: string | null) => {
  const [trackResults, setTrackResults] = useState<TrackResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(artist && token) {
      const fetchTracks = async () => {
        const tracks = await CustomFetch(`artists/${artist}/top-tracks?market=gb`, token);
        setTrackResults(tracks);
        setIsLoading(false);
      };

      fetchTracks();
    }
  }, [artist, token]);

  return {
    error: trackResults?.error,
    data: trackResults?.tracks,
    isLoading,
  };
};

export default useFetchTracks;