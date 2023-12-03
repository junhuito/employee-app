import { fireEvent, render } from '@testing-library/react';
import { Modal } from '@/components/Modal';
import '@testing-library/jest-dom';

describe('Modal', () => {
  it('should render hidden modal with given content', () => {
    const { getByText, getByRole } = render(
      <Modal>
        <p>Content</p>
      </Modal>
    );

    expect(getByText('Content')).toBeInTheDocument();
    expect(getByRole('modal')).toHaveClass('hidden');
  });

  it('should render with given content', () => {
    const { getByText, getByRole } = render(
      <Modal visible={true}>
        <p>Content</p>
      </Modal>
    );

    expect(getByText('Content')).toBeInTheDocument();
    expect(getByRole('modal')).not.toHaveClass('hidden');
  });

  it('should trigger dismiss event when dimiss layer is clicked', () => {
    const onDismissMock = jest.fn();
    const { getByRole } = render(
      <Modal onDismiss={onDismissMock}>
        <p>Content</p>
      </Modal>
    );

    fireEvent.click(getByRole('modal'));

    expect(onDismissMock).toHaveBeenCalled();
  });
});
