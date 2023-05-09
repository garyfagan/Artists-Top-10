import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useGetToken = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, [router.asPath]);

  return token;
};

export default useGetToken;