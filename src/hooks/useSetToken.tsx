import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useSetToken = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      // @ts-ignore
      token = hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split("=")[1];
      window.localStorage.setItem("token", token);
      router.push(`/search?artist=muse`);
    }
  }, [router]);

  return;
};

export default useSetToken;