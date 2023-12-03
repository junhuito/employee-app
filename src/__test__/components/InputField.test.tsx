import { render } from '@testing-library/react';
import { InputField } from '@/components/InputField';
import '@testing-library/jest-dom';

describe('InputField', () => {
  it('should render input field with label', () => {
    const { getByText } = render(<InputField label='Name' />);

    expect(getByText('Name')).toBeInTheDocument();
  });
});
