import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Search from '@/components/Search/Search';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import useGetToken from '@/hooks/useGetToken';

const AppBar: React.FC = () => {
  const token = useGetToken();

  return (
    <>
      {token && (
        <Box sx={{ flexGrow: 1, my: 1 }}>
          <MuiAppBar position="static" sx={{ backgroundColor: 'inherit' }}>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'block' } }}>
                <img src='https://garyfagan.github.io/Artists-Top-10/spotify-logo.png' alt='logo' width="140px" />
              </Box>
              <Search />
              <LogoutButton />
            </Toolbar>
          </MuiAppBar>
        </Box>
      )}
    </>
  );
};

export default AppBar;