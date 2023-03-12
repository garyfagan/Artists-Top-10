const CustomFetch = async (path: string, accessToken: string) => {
  const SPOTIFY_API = 'https://api.spotify.com/v1/';
  return await fetch(`${SPOTIFY_API}${path}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};

export default CustomFetch;