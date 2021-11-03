import React, { useState } from 'react';
import { CircularProgress, Grid, Box, Pagination } from '@mui/material';
import { useGetUsersQuery } from './api';
import UserPreviewCard from './Card';

function List() {
  const [page, setPage] = useState(1);
  const { data: response, isFetching } = useGetUsersQuery(page);

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <>
      <Grid container spacing={2}>
        {(response?.data ?? []).map((user) => (
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <UserPreviewCard user={user} />
          </Grid>
        ))}
      </Grid>
      {!!response?.total && (
        <Box display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(response.total / 20)}
            page={page}
            onChange={(ev, value) => setPage(value)}
          />
        </Box>
      )}
    </>
  );
}

export default List;
