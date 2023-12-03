import { render } from '@testing-library/react';
import { EmployeeTable } from '@/components/EmployeeTable';
import { EmployeeStatus } from '@/constants/employee.enum';
import '@testing-library/jest-dom';

describe('EmployeeTable', () => {
  it('should render table with employee info', () => {
    const { container } = render(
      <EmployeeTable
        data={[
          {
            id: 1,
            name: 'test employee',
            email: 'test@example.com',
            status: EmployeeStatus.ACTIVE,
          },
          {
            id: 2,
            name: 'test employee 2',
            email: 'test2@example.com',
            status: EmployeeStatus.DEACTIVATED,
          },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
