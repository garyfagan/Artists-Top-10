import React from 'react';
import { Grid, Typography } from '@mui/material';

import LoginButton from '@/components/LoginButton/LoginButton';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import Search from '@/components/Search/Search';
import useGetToken from '@/hooks/useGetToken';

const AppBar: React.FC = () => {
  const token = useGetToken();

  return (
    <Grid container alignItems={'center'} justifyContent={'space-between'} pb={5} my={5} sx={{ borderBottom: '1px solid #9E9E9E' }}>
      <Grid item>
        <Typography variant="h4" sx={{ color: '#FFF' }}>Spotify Top 10</Typography>
      </Grid>
      <Grid item>
        {token && (
          <Grid container gap={'15px'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item>
              <Search />
            </Grid>
            <Grid item>
              <LogoutButton />
            </Grid>
          </Grid>
        )}
        {!token && <LoginButton />}
      </Grid>
    </Grid>
  )
}

export default AppBar;