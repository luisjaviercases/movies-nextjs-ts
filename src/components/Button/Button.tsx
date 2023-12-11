import { FC, ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children, variant = 'primary', ...rest }) => {
  return (
    <button className={`${styles.button} ${styles[`button--${variant}`]}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
