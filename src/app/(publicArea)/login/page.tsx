'use client';

import styles from './page.module.scss';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useAuthSignInMutation } from '@/services/query/authApi';
import { useRouter } from 'next/navigation';
import { createCookie } from '@/app/actions';
import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner';

export default function Login() {
  const [login, { isLoading, isError }] = useAuthSignInMutation();
  const router = useRouter();

  const onSignIn = async (values: { username: string; password: string }) => {
    try {
      // Make login request
      const { token } = await login({ email: values.username, password: values.password }).unwrap();
      await createCookie('userToken', token, { httpOnly: true, path: '/' });
      router.push('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <BackgroundImage imageName='login_background.png' />
          <div className={styles.container}>
            <LoginForm onSignIn={onSignIn} error={isError} />
          </div>
        </>
      )}
    </main>
  );
}
