import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonDefaultHTMLAttributes = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonTheme = 'primary' | 'secondary' | 'danger';

type Button = {
  text: string;
  theme?: ButtonTheme;
  type?: 'button' | 'reset' | 'submit';
};

export const Button = (props: ButtonDefaultHTMLAttributes & Button) => {
  const {
    text,
    theme = 'primary',
    type = 'button',
    ...buttonDefaultHTMLAttributes
  } = props;

  const buttonTheme: Record<ButtonTheme, string> = {
    primary: 'bg-btn-primary-700 hover:bg-btn-primary-500',
    secondary: 'bg-btn-secondary-700 hover:bg-btn-secondary-500',
    danger: 'bg-btn-danger-700 hover:bg-btn-danger-500',
  };

  return (
    <button
      {...buttonDefaultHTMLAttributes}
      type={type}
      className={`text-white ${buttonTheme[theme]} cursor-pointer rounded-lg px-2 py-2.5 text-xs font-medium focus:outline-none disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
};
