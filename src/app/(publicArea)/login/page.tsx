'use client';

import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import LoginForm from '@/components/LoginForm/LoginForm';

export default function Login() {
  const onSignIn = async (values: { username: string; password: string }) => {
    console.log('onSignIn', values);
  };

  return (
    <main>
      <BackgroundImage imageName='login_background.png' />
      <div>
        <LoginForm onSignIn={onSignIn} />
      </div>
    </main>
  );
}
