import { useEffect, useState } from 'react';

import CustomFetch from '@/helpers/CustomFetch';
import { Track } from '@/types/track';

const useFetchTrack = (id: string | string[] | undefined, token: string | null) => {
  const [trackResult, setTrackResult] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(id && token) {
      const fetchTrack = async () => {
        const tracks = await CustomFetch(`tracks/${id}`, token);
        setTrackResult(tracks);
        setIsLoading(false);
      };

      fetchTrack();
    }
  }, [id, token]);

  return {
    error: trackResult?.error,
    data: trackResult,
    isLoading,
  };
};

export default useFetchTrack;