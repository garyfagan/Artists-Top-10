import { useEffect, useState } from 'react';

import CustomFetch from '@/helpers/CustomFetch';
import { ArtistResults } from '@/types/artists';

const useFetchArtists = (query: string | string[] | undefined, token: string | null) => {
  const [artistResults, setArtistResults] = useState<ArtistResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(query && token) {
      const fetchArtists = async () => {
        const artists: ArtistResults = await CustomFetch(`search?q=${query}&market=gb&type=artist&limit=10`, token);
        setArtistResults(artists);
        setIsLoading(false);
      };

      fetchArtists();
    }
  }, [query, token]);

  return {
    error: artistResults?.error,
    data: artistResults?.artists,
    isLoading,
  }
}

export default useFetchArtists;