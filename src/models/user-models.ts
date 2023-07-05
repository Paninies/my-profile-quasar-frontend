import {Article} from "src/models/article-models";

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: number;
  created_at: string;
  updated_at: string;
  articles: Article[];

}

export interface Role {
  id: number;
  role: RoleEnum;
  users: User[];
}

enum RoleEnum {
  ADMIN = 1,
  USER = 2,
  MODERATOR = 3,
  GUEST = 4
}
