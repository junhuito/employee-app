import { render } from '@testing-library/react';
import { Button, ButtonTheme } from '@/components/Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('should render button with text', () => {
    const { getByText } = render(<Button text='Click Me' />);

    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it.each([
    ['primary', 'bg-btn-primary-700 hover:bg-btn-primary-500'],
    ['secondary', 'bg-btn-secondary-700 hover:bg-btn-secondary-500'],
    ['danger', 'bg-btn-danger-700 hover:bg-btn-danger-500'],
  ])(
    'when button theme is %s, set class name to %s',
    (buttonTheme, className) => {
      const { container } = render(
        <Button text='Click Me' theme={buttonTheme as ButtonTheme} />
      );

      expect(container.firstChild).toHaveClass(className);
    }
  );
});
