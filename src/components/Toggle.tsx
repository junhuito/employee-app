import { useToggle } from '@/hooks';

type Toggle = {
  label?: string;
  checked?: boolean;
  labelCapitilize?: boolean;
  onChange?: (callback: boolean) => void;
};

export const Toggle = ({
  label = '',
  checked = false,
  labelCapitilize = false,
  onChange = () => void 0,
}: Toggle) => {
  const { visible, toggle } = useToggle(checked);

  return (
    <label className='relative inline-flex cursor-pointer items-center'>
      <input
        type='checkbox'
        checked={visible}
        className='peer sr-only'
        onChange={(e) => {
          toggle();
          onChange(e.target.checked);
        }}
      />
      <div className="peer h-6 w-11 rounded-full bg-slate-900 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
      <span
        className={`ms-3 select-none text-sm font-medium ${
          labelCapitilize ? 'capitalize' : ''
        }`}
      >
        {label}
      </span>
    </label>
  );
};
