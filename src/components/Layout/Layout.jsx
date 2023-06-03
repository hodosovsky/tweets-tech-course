import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontFamily="body"
      padding="26px 36px 36px 36px;"
      bg="white"
      as="main"
    >
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
