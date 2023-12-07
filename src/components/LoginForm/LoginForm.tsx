'use client';

import { FC } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Button from '@/components/Button/Button';
import TextField from '@/components/TextField/TextField';

interface LoginFormProps {
  error?: string | null;
  onSignIn: (values: { username: string; password: string }) => void;
}

interface FormData {
  username: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ error, onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    onSignIn(data as FormData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type='text'
        placeholder='Username'
        {...register('username', {
          required: 'Username is required',
        })}
        errorMessage={errors.username && errors.username.message}
      />
      <TextField
        type='password'
        placeholder='Password'
        {...register('password', { required: 'Password is required' })}
        errorMessage={errors.password && errors.password.message}
      />

      <Button>Sign In</Button>
      {error && <span>Entered username and/or password are not valids</span>}
    </form>
  );
};

export default LoginForm;
