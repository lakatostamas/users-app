import React from 'react';
import { CircularProgress, Grid, Box, Pagination, Typography } from '@mui/material';
import PostCard from './PostCard';
import { usePostList } from './hook';
import { ListTypes } from './model';

function List() {
  const { page, setPage, response, isFetching, userResponse, isUserLoading, listType, tagId } = usePostList();

  if (isFetching) {
    return <CircularProgress />;
  }

  const renderTitle = () => {
    if (listType === ListTypes.BY_USER_LIST) {
      return <>User: {isUserLoading ? <CircularProgress size={16} /> : userResponse?.firstName}</>;
    }

    return <>Tag: #{tagId}</>;
  };

  return (
    <>
      <Typography variant="h6" noWrap component="div">
        {renderTitle()}
      </Typography>
      <Grid container spacing={2}>
        {(response?.data ?? []).map((post) => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
            <PostCard post={post} listType={listType} />
          </Grid>
        ))}
      </Grid>
      {!!response?.total && (
        <Box display="flex" justifyContent="center">
          <Pagination count={Math.ceil(response.total / 20)} page={page} onChange={(ev, value) => setPage(value)} />
        </Box>
      )}
    </>
  );
}

export default List;
