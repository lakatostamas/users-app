import React from 'react';
import { CircularProgress, Card, CardHeader, Box, Avatar } from '@mui/material';
import { IUserPreview } from './model';
import { useGetPostListByUserQuery } from './api';

interface ICardProps {
  user: IUserPreview;
}

function UserPreviewCard(props: ICardProps) {
  const { user } = props;
  const { data: response, isLoading } = useGetPostListByUserQuery(user.id);

  return (
    <Box my={2}>
      <Card>
        <CardHeader
          title={user.firstName}
          subheader={
            isLoading ? (
              <CircularProgress size={12} />
            ) : (
              `Posts: ${response?.total ?? 0}`
            )
          }
        />
        <Box display="flex" justifyContent="center" my={2}>
          <Avatar
            alt={user.firstName}
            src={user.picture}
            sx={{ width: 72, height: 72 }}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default UserPreviewCard;
