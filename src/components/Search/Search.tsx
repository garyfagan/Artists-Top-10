import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchContainer = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      width: '200px',
    },
  },
}));

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