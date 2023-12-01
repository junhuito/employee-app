"use client";
import { Button } from '@/components/Button';
import { EmployeeForm } from '@/components/EmployeeForm';
import { Modal } from '@/components/Modal';
import { EmployeeTable } from '@/components/Table';
import { EmployeeStatus } from '@/constants/employee.enum';
import { useToggle } from '@/hooks';
import { EmployeeData } from '@/interfaces/employee.interface';

export default function Home() {

  const { visible, toggle, setToggleStatus} = useToggle();

  const sampleData: EmployeeData[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      status: EmployeeStatus.ACTIVE,
    }
  ]
  
  return (
    <main className='p-10 space-y-4'>
      <EmployeeTable data={sampleData}/>
      <Button text='Open Modal' theme='primary' onClick={toggle}/>
      <Modal visible={visible} onDismiss={() => setToggleStatus(false)}>
        <EmployeeForm/>
      </Modal>
    </main>
  );
}
