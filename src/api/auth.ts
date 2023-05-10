import { SignUpForm } from 'src/components/sign-up';
import instance from './index';
import { SignInResponse } from 'src/type/auth';
export const signIn = async (body: any) => {
  return await instance.post<SignInResponse>('/user/signIn', body);
};
export const signUp = async (body: SignUpForm) => {
  console.log('body', body);
  return await instance.post('/user/signup', body);
};
