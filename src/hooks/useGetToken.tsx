import { useEffect, useState } from 'react';

const useGetToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => setToken(window.localStorage.getItem("token")), []);

  return token;
}

export default useGetToken;