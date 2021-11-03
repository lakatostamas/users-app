import UserList from './features/user/List';
import UserShow from './features/user/Show';
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
    path: '/user/:userId',
    component: UserShow,
    exact: true,
  },
  {
    path: '/tag/:tagId/post',
    component: PostList,
    exact: true,
  },
];
