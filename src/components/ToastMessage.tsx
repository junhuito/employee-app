import classNames from 'classnames';
import { useEffect, useRef } from 'react';

type ToastMessage = {
  message: string;
  duration?: number;
  showToast?: boolean;
  onClose?: () => void;
  onDurationEnd?: () => void;
};

export const ToastMessage = ({
  message = '',
  onClose,
  showToast = false,
  duration,
  onDurationEnd = () => void 0,
}: ToastMessage) => {
  const timer = useRef<any>(null);

  useEffect(() => {
    if (duration) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        onDurationEnd();
        timer.current = null;
      }, duration * 1000);
    }
  }, [duration, onDurationEnd]);

  return (
    <div
      id='toast-success'
      className={`${classNames({
        hidden: !showToast,
      })} fixed inset-x-0 top-0 mx-auto flex w-fit items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400`}
      role='alert'
    >
      <div className='inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200'>
        <svg
          className='h-5 w-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
        </svg>
        <span className='sr-only'>Check icon</span>
      </div>
      <div className='ms-3 text-sm font-normal'>{message}</div>
      {!!onClose && (
        <button
          type='button'
          className='-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white'
          data-dismiss-target='#toast-success'
          aria-label='Close'
          onClick={(e) => onClose()}
        >
          <span className='sr-only'>Close</span>
          <svg
            className='h-3 w-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
        </button>
      )}
    </div>
  );
};
