import { MySession } from '@/types/session';

const CustomFetch = async (path: string, session: MySession | null) => {
  const SPOTIFY_API = 'https://api.spotify.com/v1/';
  return await fetch(`${SPOTIFY_API}${path}`, {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    },
  }).then((res) => res.json());
};

export default CustomFetch;