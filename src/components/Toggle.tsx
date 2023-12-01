import { useToggle } from "@/hooks";

type Toggle = {
  label?: string;
  checked?: boolean;
  onChange?: (callback: boolean) => void;
}

export const Toggle = ({
  label = '',
  checked = false,
  onChange = () => void 0,
}: Toggle) => {

  const { visible, toggle } = useToggle(checked);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={visible} className="sr-only peer" onChange={(e) => {
        toggle();
        onChange(e.target.checked);
      }}/>
      <div className="w-11 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 bg-slate-900"></div>
      <span className="ms-3 text-sm font-medium select-none">
        {label}
      </span>
    </label>
  );
};
