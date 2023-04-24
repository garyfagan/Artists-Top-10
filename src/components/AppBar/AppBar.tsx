import React from 'react';
import { Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


import Search from '@/components/Search/Search';
import LoginButton from '@/components/LoginButton/LoginButton';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import useGetToken from '@/hooks/useGetToken';

const AppBar: React.FC = () => {
  const token = useGetToken();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" sx={{ backgroundColor: 'inherit' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block' } }}
          >
            Artist Top 10
          </Typography>
          {token && (
            <>
              <Search />
              <LogoutButton />
            </>
          )}
          {!token && <LoginButton />}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}

export default AppBar;