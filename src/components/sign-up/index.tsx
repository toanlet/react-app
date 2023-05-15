import { Button,  } from 'antd';
import { useForm } from 'react-hook-form';
import { AppInput } from 'src/common/app-input';
import './styles.scss';
import { REGEX } from 'src/constand';

import { signUp } from 'src/api/auth';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { SHOW_TOAST } from 'src/store/constant';
import AppRadioGroup from 'src/common/app-radio-group';

export interface SignUpForm {
  email: string;
  firstName: string;
  lastName: string;
  passWord: string;

  gender: boolean | null;
}

export const SignUp = () => {
  const formData: SignUpForm = {
    email: '',
    firstName: '',
    lastName: '',
    passWord: '',
    gender: null,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<SignUpForm>({
    defaultValues: formData,
  });

  const options = [
    {
      text: 'Male',
      value: 1,
    },
    {
      text: 'Female',
      value: 2,
    },
  ];

  const state = useAppSelector((s: any) => s);
  console.log(state);
  const dispatch = useAppDispatch();

  const onSubmit = (form: any) => {
    handleSignUp(form);
    console.log('form', form);
  };

  const handleSignUp = async (data: SignUpForm) => {
    const res = await signUp(data);
    if (res.status === 200) {
      dispatch({
        type: SHOW_TOAST,
        message: 'Success',
      });
    }
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          placeholder="Enter email "
          label="Email"
          error={Boolean(errors.email?.message)}
          controller={{
            control,
            name: 'email',
            rules: {
              required: {
                value: true,
                message: 'This field is required',
              },

              pattern: {
                value: REGEX.email,
                message: 'Email is invalid',
              },
            },
          }}
          textError={errors.email?.message}
        />
        <AppInput
          placeholder="Enter password "
          label="Password"
          password
          error={Boolean(errors.passWord?.message)}
          controller={{
            control,
            name: 'passWord',
            rules: {
              required: {
                value: true,
                message: 'This field is required',
              },
              pattern: {
                value: REGEX.password,
                message: 'Password is invalid',
              },
            },
          }}
          textError={errors.passWord?.message}
        />

        <AppInput
          placeholder="Enter first name "
          label="First Name"
          error={Boolean(errors.firstName?.message)}
          controller={{
            control,
            name: 'firstName',
            rules: {
              required: {
                value: true,
                message: 'This field is required',
              },
            },
          }}
          textError={errors.firstName?.message}
        />

        <AppInput
          placeholder="Enter last name "
          label="Last Name"
          error={Boolean(errors.firstName?.message)}
          controller={{
            control,
            name: 'lastName',
            rules: {
              required: {
                value: true,
                message: 'This field is required',
              },
            },
          }}
          textError={errors.lastName?.message}
        />
        <AppRadioGroup
          options={options}
          controller={{
            name: 'gender',
            control,
          }}
          onChange={(e: any) => setValue('gender', e.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
