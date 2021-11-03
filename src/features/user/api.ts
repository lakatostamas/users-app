import { api } from '../../app/api';
import { GenericListResponse } from '../../app/model';
import { IUserPreview, IUser } from './model';

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GenericListResponse<IUserPreview>, number>({
      query: (page) => `/user?page=${Math.max(page - 1, 0)}`,
    }),
    getUserById: build.query<IUser, string>({
      query: (id) => `/user/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery, useGetUserByIdQuery, useLazyGetUserByIdQuery } = userApi;
