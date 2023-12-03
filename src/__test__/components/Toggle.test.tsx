import { render, fireEvent } from '@testing-library/react';
import { Toggle } from '@/components/Toggle';
import '@testing-library/jest-dom';

describe('Toggle', () => {
  it('should render toggle with label', () => {
    const { getByText, container } = render(<Toggle label='toggle label' />);

    expect(getByText('toggle label')).toBeInTheDocument();
    expect(container.querySelector('span')).not.toHaveClass('capitalize');
    expect(container.querySelector('input')?.checked).toBe(false);
  });

  it('should add capitalize class to toggle label', () => {
    const { container } = render(
      <Toggle label='toggle label' labelCapitilize={true} />
    );

    expect(container.querySelector('span')).toHaveClass('capitalize');
  });

  it('should render toggle with checked status', () => {
    const { container } = render(
      <Toggle label='toggle label' checked={true} />
    );

    expect(container.querySelector('input')?.checked).toBe(true);
  });

  it('should trigger onChange event when clicked', () => {
    const onChangeEvent = jest.fn();
    const { getByLabelText } = render(
      <Toggle label='toggle label' onChange={onChangeEvent} />
    );
    const checkBox = getByLabelText('toggle label');

    fireEvent.click(checkBox);
    fireEvent.click(checkBox);

    expect(onChangeEvent).toHaveBeenNthCalledWith(1, true);
    expect(onChangeEvent).toHaveBeenNthCalledWith(2, false);
  });
});
