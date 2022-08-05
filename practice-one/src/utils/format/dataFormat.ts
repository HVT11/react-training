import { IUser } from '../interface/IUser';

export const dataFormat = (data: IUser[]) => {
  return data.map((user) => ({
    id: user.id.toString(),
    username: user.name,
    status: user.status ? true : false,
    email: user.email,
    url: user.avatar,
  }));
};
