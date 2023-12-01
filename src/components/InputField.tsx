import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type InputText = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputField = InputText & {
  label: string;
  type?: HTMLInputTypeAttribute;
}

export const InputField = (props: InputField) => {
  const { label, type = "text", ...inputProps } = props;

  return (
    <div>
      <label
        htmlFor="success"
        className="block mb-2 text-sm font-medium text-black dark:text-white"
      >
        {label}
      </label>
      <input
        {...inputProps}
        type={type}
        className="outline-none border-2 border-gray-200 text-sm rounded-lg block w-full p-2.5 text-black"
      />
    </div>
  );
};
