"use client";
import { EmployeeForm } from '@/components/EmployeeForm';
import { Modal } from '@/components/Modal';
import { EmployeeTable } from '@/components/EmployeeTable';
import { useToggle } from '@/hooks';
import { useAppSelector } from '@/redux/hook';
import { getEmployee, selectEmployee } from '@/redux/features/employee/employeeSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch } from "@/redux/hook";
import { updateEmployeeById } from "@/redux/features/employee/employeeSlice";

export default function Home() {

  const { visible, setToggleStatus} = useToggle();
  const [modalContent, setModalContent] = useState(<></>)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getEmployee())
  }, []);

  const employeeTableData = useAppSelector(selectEmployee);

  return (
    <main className='p-10 space-y-4'>
      <EmployeeTable data={employeeTableData} onActionClick={(employeeData) => {
        setModalContent(
          <EmployeeForm
            data={employeeData}
            onSubmit={(employeeData) => {
              dispatch(updateEmployeeById(employeeData));
              setToggleStatus(false);
              setModalContent(<></>)
            }}
          />
        );
        setToggleStatus(true)
      }}/>
      <Modal visible={visible} onDismiss={() => setToggleStatus(false)}>
        {modalContent}
      </Modal>
    </main>
  );
}
