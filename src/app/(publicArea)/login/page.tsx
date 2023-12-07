'use client';

import styles from './styles.module.scss';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import LoginForm from '@/components/LoginForm/LoginForm';

export default function Login() {
  const onSignIn = async (values: { username: string; password: string }) => {
    console.log('onSignIn', values);
  };

  return (
    <main>
      <BackgroundImage imageName='login_background.png' />
      <div className={styles.container}>
        <LoginForm onSignIn={onSignIn} />
      </div>
    </main>
  );
}
