import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CircularProgress,
  Grid,
  Box,
  Pagination,
  Typography,
} from '@mui/material';
import { useGetPostListByUserQuery } from './api';
import { useGetUserByIdQuery } from '../user/api';
import PostCard from './PostCard';

function List() {
  const [page, setPage] = useState(1);
  const { userId } = useParams<{ userId: string }>();
  const { data: response, isFetching } = useGetPostListByUserQuery(userId);
  const { data: userResponse, isLoading: isUserLoading } =
    useGetUserByIdQuery(userId);

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography variant="h6" noWrap component="div">
        User:{' '}
        {isUserLoading ? (
          <CircularProgress size={16} />
        ) : (
          userResponse?.firstName
        )}
      </Typography>
      <Grid container spacing={2}>
        {(response?.data ?? []).map((post) => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
            <PostCard post={post} />
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
