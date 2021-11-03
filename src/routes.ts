import UserList from './features/user/List';

export const routes = [
 {
  path: '/',
  component: UserList,
  exact: true,
  isProtected: true
 },
];

