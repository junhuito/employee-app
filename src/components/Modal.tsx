import classnames from 'classnames';

type Modal = {
  children: JSX.Element;
  visible: boolean;
  onDismiss?: () => void;
};

export const Modal = ({
  onDismiss = () => void 0,
  visible = false,
  children,
}: Modal) => {
  return (
    <div
      onClick={onDismiss}
      className={`${classnames({
        'hidden': !visible,
      })} bg-black !m-0 bg-opacity-60 fixed !inset-0 z-50 flex justify-center items-center`}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
