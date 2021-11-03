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
import { IPostPreview } from './model';
import { useGetCommentsByPostIdQuery } from './api';

interface ICardProps {
  post: IPostPreview;
}

function UserPreviewCard(props: ICardProps) {
  const { post } = props;
  const { data: response, isLoading } = useGetCommentsByPostIdQuery(post.id);

  return (
    <Box my={2}>
      <Card>
        <CardHeader title="Post" subheader={`Likes: ${post?.likes ?? 0}`} />
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar
            alt={post.text}
            src={post.image}
            sx={{ width: 72, height: 72 }}
          />
        </Box>
        <Box p={2}>{post.text}</Box>
        {post.tags.map((tag) => (
          <Box
            key={tag}
            mx={1}
            my={1}
            display="inline-block"
            onClick={() => console.log(tag)}
          >
            <Chip label={tag} color="primary" />
          </Box>
        ))}
        {isLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          (response?.data ?? []).slice(0, 2).map((comment) => (
            <Paper key={comment.id}>
              <Box p={2}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar
                      alt={comment.owner?.firstName}
                      src={comment.owner?.picture}
                    />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography variant="h6">
                      {comment.owner?.firstName}
                    </Typography>
                    <Typography variant="body1">{comment.message}</Typography>
                  </Grid>
                </Grid>
                <Divider variant="fullWidth" />
              </Box>
            </Paper>
          ))
        )}
      </Card>
    </Box>
  );
}

export default UserPreviewCard;
