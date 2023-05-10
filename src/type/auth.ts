export interface BaseResponse<T = any> {
  code?: string;
  message?: string;
  status?: string;
  data: T;
}

export interface SignInRes {
  token: string;
  status: string;
}
export type SignUpResponse = {};

export type SignInResponse = {
  token: string;
  status: string;
};
