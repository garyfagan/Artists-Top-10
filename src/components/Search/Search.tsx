import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Search as SearchIcon } from '@mui/icons-material';
import { SearchContainer, SearchIconWrapper, StyledInputBase } from './Search.s';

const Search: React.FC = () => {
  const router = useRouter();
  const [artist, setArtist] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?artist=${artist}`);
    setArtist('');
  };

  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e)}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        inputProps={{ 'aria-label': 'search' }}
        onChange={(event) => setArtist(event.target.value)}
        placeholder="Search"
        value={artist}
      />
    </SearchContainer>
  );
};

export default Search;