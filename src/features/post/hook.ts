import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostListByUserQuery, useGetPostListByTagQuery } from './api';
import { useLazyGetUserByIdQuery } from '../user/api';
import { ListTypes } from './model';

export function usePostList() {
  const [getUser, { data: userResponse, isLoading: isUserLoading }] = useLazyGetUserByIdQuery();
  const [page, setPage] = useState(1);
  const { userId, tagId } = useParams<{ userId?: string; tagId?: string }>();
  const listType = !!userId ? ListTypes.BY_USER_LIST : ListTypes.BY_TAG_LIST;

  // I think this is OK for 2 cases, if there would more I would implement a more
  // robust solution
  const { data: response, isFetching } =
    listType === ListTypes.BY_USER_LIST
      ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        useGetPostListByUserQuery(userId!)
      : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        useGetPostListByTagQuery(tagId!);

  useEffect(() => {
    if (listType === ListTypes.BY_USER_LIST && userId) {
      getUser(userId);
    }
  }, [listType]);

  return {
    listType,
    page,
    setPage,
    response,
    isFetching,
    userResponse,
    isUserLoading,
    tagId,
  };
}
