import { IUserPreview } from '../user/model';

export interface IPostPreview {
  id: string;
  text: string;
  image: string;
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: IUserPreview;
}

export interface IComment {
  id: string;
  message: string;
  owner: IUserPreview;
  post: Array<string>;
  publishDate: string;
}
