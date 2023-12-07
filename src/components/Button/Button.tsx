import { FC, ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children, ...rest }) => {
  return (
    <button className={styles.button} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
