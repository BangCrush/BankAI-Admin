import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Link, Stack } from '@mui/material';
import Logo from 'src/components/logo';
import LoginIcon from '@mui/icons-material/Login';

const TOP_NAV_HEIGHT = 64;

export const TopNav = () => (
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
        {/* 비로그인 상태 - 로그인 페이지 이동*/}
        <Link
          color="inherit"
          component={RouterLink}
          to="/login"
          variant="body2"
        >
          <LoginIcon />
        </Link>

        {/* 로그인 상태 */}
        {/* <Avatar
          src="/assets/avatars/avatar-chen-simmons.jpg"
          variant="rounded"
        /> */}
      </Stack>
    </Stack>
  </Box>
);
