import UserList from './features/user/List';
import PostList from './features/post/List';

export const routes = [
  {
    path: '/',
    component: UserList,
    exact: true,
  },
  {
    path: '/user/:userId/post',
    component: PostList,
    exact: true,
  },
  {
    path: '/tag/:tagId/post',
    component: PostList,
    exact: true,
  },
];
