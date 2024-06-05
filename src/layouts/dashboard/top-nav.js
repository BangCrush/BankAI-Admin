import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack } from '@mui/material';
import Logo from 'src/components/logo';
import LoginIcon from '@mui/icons-material/Login';
import UserMinusIcon from '@heroicons/react/24/solid/UserMinusIcon';
import { SvgIcon } from '@mui/material';

const TOP_NAV_HEIGHT = 64;

export const TopNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: 'neutral.900',
        color: 'common.white',
        position: 'fixed',
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 3,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={3}>
          <Box
            component={RouterLink}
            to="/line-chart"
            sx={{
              display: 'inline-flex',
              height: 50,
              width: 50,
            }}
          >
            <Logo />
          </Box>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          {isLoggedIn ? (
            <Link
              color="inherit"
              component={RouterLink}
              variant="body2"
              onClick={handleLogout}
            >
              <SvgIcon>
                <UserMinusIcon/>
              </SvgIcon>
            </Link>
          ) : (
            <Link
              color="inherit"
              component={RouterLink}
              to="/login"
              variant="body2"
            >
              <LoginIcon />
            </Link>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};
