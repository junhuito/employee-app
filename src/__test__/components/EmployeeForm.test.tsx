import { render } from '@testing-library/react';
import { EmployeeForm } from '@/components/EmployeeForm';
import { EmployeeStatus } from '@/constants/employee.enum';
import '@testing-library/jest-dom';

describe('EmployeeForm', () => {
  it('should render form', () => {
    const { container } = render(
      <EmployeeForm
        data={{
          id: 1,
          name: 'test employee',
          email: 'test@example.com',
          status: EmployeeStatus.ACTIVE,
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
