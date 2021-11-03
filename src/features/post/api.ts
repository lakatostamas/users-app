import { api } from '../../app/api';
import { GenericListResponse } from '../../app/model';
import { IPostPreview, IComment } from './model';

const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPostListByUser: build.query<GenericListResponse<IPostPreview>, string>({
      query: (user) => `/user/${user}/post`,
    }),
    getCommentsByPostId: build.query<GenericListResponse<IComment>, string>({
      query: (id) => `/post/${id}/comment`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostListByUserQuery, useGetCommentsByPostIdQuery } =
  postApi;
