import { forwardRef, InputHTMLAttributes, ForwardRefRenderFunction } from 'react';
import styles from './TextField.module.scss';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = ({ errorMessage, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      <input {...rest} ref={ref} className={styles['container__input']} />
      {errorMessage && (
        <span className={styles['container__error-message']} data-testid='text-field--error-message'>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default forwardRef(TextField);
