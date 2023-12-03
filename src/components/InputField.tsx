import {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react';

type InputText = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputField = InputText & {
  label: string;
  type?: HTMLInputTypeAttribute;
};

export const InputField = (props: InputField) => {
  const { label, type = 'text', ...inputProps } = props;

  return (
    <div>
      <label className='mb-2 block text-sm font-medium text-black dark:text-white'>
        {label}
      </label>
      <input
        {...inputProps}
        type={type}
        className='block w-full rounded-lg border-2 border-gray-200 p-2.5 text-sm text-black outline-none'
      />
    </div>
  );
};
