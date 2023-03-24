interface IAuthState extends ITokens {
  isAuth: boolean;
  isLoading: boolean;
}

interface ITokens {
  access_token: string;
  refresh_token: string;
}

interface ISignUpDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  secret: string;
}

interface ISignInDto {
  email: string;
  password: string;
}
