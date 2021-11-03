import React from 'react';
import {
  CircularProgress,
  Card,
  CardHeader,
  Box,
  Avatar,
  Chip,
  Paper,
  Grid,
  Divider,
  Typography,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { IPostPreview } from './model';
import { useGetCommentsByPostIdQuery } from './api';
import { ListTypes } from './model';

interface ICardProps {
  post: IPostPreview;
  listType: ListTypes;
}

function PostCard(props: ICardProps) {
  const { post, listType } = props;
  const history = useHistory();
  const { data: commentsResponse, isLoading: commentsLoading } = useGetCommentsByPostIdQuery(
    post.id,
  );

  // if there were more cases, I would use `renderProps` instead of if/else statements
  const renderSubHeader = () => {
    if (listType === ListTypes.BY_USER_LIST) {
      return `Likes: ${post?.likes ?? 0}`;
    }

    if (listType === ListTypes.BY_TAG_LIST) {
      return `Author: ${post?.owner?.firstName}`;
    }

    return '';
  };

  const renderCommentsSection = () => {
    if (listType === ListTypes.BY_USER_LIST) {
      return (
        <>
          {(commentsResponse?.data ?? []).slice(0, 2).map((comment) => (
            <Paper key={comment.id}>
              <Box p={2}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar alt={comment.owner?.firstName} src={comment.owner?.picture} />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography variant="h6">{comment.owner?.firstName}</Typography>
                    <Typography variant="body1">{comment.message}</Typography>
                  </Grid>
                </Grid>
                <Divider variant="fullWidth" />
              </Box>
            </Paper>
          ))}
        </>
      );
    }

    if (listType === ListTypes.BY_TAG_LIST) {
      return <Box p={2}>{`Comments Count: ${commentsResponse?.total ?? 0}`}</Box>;
    }

    return '';
  };

  return (
    <Box my={2}>
      <Card>
        <CardHeader title="Post" subheader={renderSubHeader()} />
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar alt={post.text} src={post.image} sx={{ width: 72, height: 72 }} />
        </Box>
        <Box p={2}>{post.text}</Box>
        {post.tags.map((tag) => (
          <Box
            key={tag}
            mx={1}
            my={1}
            display="inline-block"
            onClick={() => history.push(`/tag/${tag}/post`)}
          >
            <Chip label={tag} color="primary" />
          </Box>
        ))}
        {commentsLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          renderCommentsSection()
        )}
      </Card>
    </Box>
  );
}

export default PostCard;
