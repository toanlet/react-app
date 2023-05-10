import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { AppInput } from 'src/common/app-input';
import { REGEX } from 'src/constand';
import { signIn } from 'src/api/auth';
import { useAppDispatch, useRouter } from 'src/hooks';
import { SHOW_TOAST } from 'src/store/constant';
import { Link } from 'react-router-dom';
import './styles.scss';

export const SignIn = () => {
  const formData = {
    email: '',
    password: '',
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const dispatch = useAppDispatch();
  const { navigate } = useRouter();

  const onSubmit = (form: any) => {
    handleSignIn(form);
  };

  const handleSignIn = async (form: any) => {
    try {
      const { data, status } = await signIn(form);

      if (status === 200) {
        dispatch({
          type: SHOW_TOAST,
          payload: {
            type: 'success',
            message: 'Login Successful',
          },
        });
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    } catch (error) {
      dispatch({
        type: SHOW_TOAST,
        payload: {
          type: 'error',
          message: 'Something went wrong',
        },
      });
    }
  };
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
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
          error={Boolean(errors.password?.message)}
          controller={{
            control,
            name: 'password',
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
          textError={errors.password?.message}
        />

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
      <Link to={'/sign-up'}>Create a account </Link>
    </div>
  );
};
