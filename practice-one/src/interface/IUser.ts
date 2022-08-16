enum status {
  true,
  false
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  status: status.true | status.false;
  avatar: string;
}
