'use client';
import { EmployeeForm } from '@/components/EmployeeForm';
import { Modal } from '@/components/Modal';
import {
  Direction,
  EmployeeTable,
  SortAttributes,
} from '@/components/EmployeeTable';
import { useAppSelector } from '@/redux/hook';
import {
  fetchEmployeeLoading,
  getEmployee,
  selectEmployee,
  sortEmployee,
} from '@/redux/features/employee/employeeSlice';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/redux/hook';
import { updateEmployeeById } from '@/redux/features/employee/employeeSlice';
import { ToastMessage } from '@/components/ToastMessage';
import { useToggle } from '@/hooks';
import { Header } from '@/components/Header';
import { EmployeeData } from '@/interfaces/employee.interface';

export default function Home() {
  const [modalContent, setModalContent] = useState(<></>);
  const { visible, setToggleStatus } = useToggle();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

  const employeeTableData = useAppSelector(selectEmployee);
  const loading = useAppSelector(fetchEmployeeLoading);

  const handleActionClick = (employeeData: EmployeeData) => {
    setModalContent(
      <Modal visible={true} onDismiss={() => setModalContent(<></>)}>
        <EmployeeForm
          data={employeeData}
          onSubmit={(employeeData) => {
            dispatch(updateEmployeeById(employeeData));
            setModalContent(<></>);
            setToggleStatus(true);
          }}
          onCancelClick={() => {
            setModalContent(<></>);
          }}
        />
      </Modal>
    );
  };

  const handleSort = useCallback(
    (sort: { attribute: SortAttributes; direction: Direction }) => {
      dispatch(sortEmployee(sort));
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <main className='space-y-4 p-10'>
        <EmployeeTable
          isLoading={loading}
          data={employeeTableData}
          onCaretClick={handleSort}
          onActionClick={handleActionClick}
        />
        {modalContent}
        <ToastMessage
          showToast={visible}
          duration={5}
          onDurationEnd={() => setToggleStatus(false)}
          message={'Employee info updated successfully'}
        />
      </main>
    </>
  );
}
