import React from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Card, CardHeader, Box, Avatar, Button, Stack } from '@mui/material';
import { IUserPreview } from './model';
import { useGetPostListByUserQuery } from '../post/api';

interface ICardProps {
  user: IUserPreview;
}

function UserPreviewCard(props: ICardProps) {
  const { user } = props;
  const { data: response, isLoading } = useGetPostListByUserQuery(user.id);
  const history = useHistory();

  return (
    <Box my={2}>
      <Card>
        <CardHeader
          title={user.firstName}
          subheader={isLoading ? <CircularProgress size={12} /> : `Posts: ${response?.total ?? 0}`}
        />
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar alt={user.firstName} src={user.picture} sx={{ width: 72, height: 72 }} />
        </Box>
        <Stack spacing={2} direction="row" justifyContent="center" mb={2}>
          <Button variant="contained" onClick={() => history.push(`/user/${user.id}`)}>
            Profile
          </Button>
          <Button variant="outlined" onClick={() => history.push(`/user/${user.id}/post`)}>
            Posts
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}

export default UserPreviewCard;
