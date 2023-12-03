import classnames from 'classnames';

type Modal = {
  children: JSX.Element;
  visible?: boolean;
  onDismiss?: () => void;
};

export const Modal = ({
  onDismiss = () => void 0,
  visible = false,
  children,
}: Modal) => {
  return (
    <div
      role='modal'
      onClick={onDismiss}
      className={`${classnames({
        hidden: !visible,
      })} fixed !inset-0 z-50 !m-0 flex items-center justify-center bg-black bg-opacity-60`}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
