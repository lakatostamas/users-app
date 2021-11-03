import { api } from '../../app/api';
import { GenericListResponse } from '../../app/model';
import { IUserPreview, IPostPreview } from './model';

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GenericListResponse<IUserPreview>, number>({
      query: (page) => `/user?page=${Math.max(page - 1, 0)}`,
    }),
    getPostListByUser: build.query<GenericListResponse<IPostPreview>, string>({
      query: (user) => `/user/${user}/post`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useGetPostListByUserQuery } = userApi;
