import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from './Button';
import { InputField } from './InputField';
import { Toggle } from './Toggle';
import { EmployeeStatus } from '@/constants/employee.enum';
import { EmployeeData } from '@/interfaces/employee.interface';

type EmployeeForm = {
  onSubmit?: (callback: EmployeeData) => void;
  onCancelClick?: () => void;
  data: EmployeeData;
};

export const EmployeeForm = (props: EmployeeForm) => {
  const [employeeData, setEmployeeData] = useState<EmployeeData>(props.data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (toggleStatus: boolean) => {
    setEmployeeData((prev) => ({
      ...prev,
      status: toggleStatus ? EmployeeStatus.ACTIVE : EmployeeStatus.DEACTIVATED,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit(employeeData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-5 rounded-lg bg-white p-10 dark:bg-primary-700'
    >
      <InputField
        label='Name'
        name='name'
        onChange={handleChange}
        placeholder='name'
        required
        value={employeeData.name}
      />
      <InputField
        type='email'
        name='email'
        label='Email'
        onChange={handleChange}
        placeholder='johndoe@sample.com'
        required
        value={employeeData.email}
      />
      <div className='block w-full'>
        <Toggle
          label={employeeData.status}
          labelCapitilize={true}
          checked={employeeData.status === EmployeeStatus.ACTIVE}
          onChange={handleToggle}
        />
      </div>
      <div className='flex justify-between'>
        <Button
          text='Cancel'
          theme='danger'
          onClick={(e) => props.onCancelClick && props.onCancelClick()}
        />
        <Button type='submit' text='Submit' />
      </div>
    </form>
  );
};
