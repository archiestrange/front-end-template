import React from 'react';

import { useQuery } from '@apollo/client';
import { Box, Stack } from '@mui/material';

import { GET_USER } from '../../api/query/getUser';

/**
 * This page will be the first thing the user sees when they load up the website.
 */
export const HomePage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: '9f0c3737-bbcd-428b-bcb4-2e48bf290e5f' },
  });

  return (
    <Stack>
      <Box>Homepage</Box>
      <Box>{JSON.stringify(data, null, 2)}</Box>
      <Box>{loading}</Box>
      <Box>{JSON.stringify(error, null, 2)}</Box>
    </Stack>
  );
};
