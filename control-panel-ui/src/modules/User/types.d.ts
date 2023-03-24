interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

type IUserState = IUser;

type IToken<T> = T & {
  iat: number;
  exp: number;
};
