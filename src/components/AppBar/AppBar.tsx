import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

import LoginButton from '@/components/LoginButton/LoginButton';
import LogoutButton from '@/components/LogoutButton/LogoutButton';
import Search from '@/components/Search/Search';

const AppBar: React.FC = () => {
  const session = useSession();

  return (
    <Grid container alignItems={'center'} justifyContent={'space-between'} pb={5} my={5} sx={{ borderBottom: '1px solid #9E9E9E' }}>
      <Grid item>
        <Typography variant="h4" sx={{ color: '#FFF' }}>Spotify Top 10</Typography>
      </Grid>
      <Grid item>
        {session.status === 'authenticated' && (
          <Grid container gap={'15px'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item>
              <Search />
            </Grid>
            <Grid item>
              <LogoutButton />
            </Grid>
          </Grid>
        )}
        {session.status === 'unauthenticated' && <LoginButton />}
      </Grid>
    </Grid>
  )
}

export default AppBar;