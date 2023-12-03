import { EmployeeStatus } from '@/constants/employee.enum';
import { Button } from './Button';
import { EmployeeData } from '@/interfaces/employee.interface';
import classNames from 'classnames';

export type EmployeeTable = {
  data: EmployeeData[];
  onActionClick?: (callback: EmployeeData) => void;
};

export const EmployeeTable = ({
  data = [],
  onActionClick = () => void 0,
}: EmployeeTable) => {
  return (
    <div className='relative overflow-x-auto rounded-lg border-2 shadow-md dark:border-none'>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 md:table-fixed'>
        <caption className='border-b-2 bg-white p-5 text-left text-lg font-semibold text-gray-900 rtl:text-right dark:border-none dark:bg-gray-800 dark:text-white'>
          Employees
        </caption>
        <thead className='uppercas border-b-2 bg-stone-50 text-xs text-gray-700 dark:border-none dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 capitalize'>
              ID
            </th>
            <th scope='col' className='px-6 py-3 capitalize'>
              Name & Email
            </th>
            <th scope='col' className='px-6 py-3 capitalize'>
              Status
            </th>
            <th scope='col' className='px-6 py-3 capitalize'>
              <span className='sr-only'>Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employeeData) => (
            <tr
              key={employeeData.id}
              className='border-b-2 bg-white text-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
            >
              <td scope='row' className='whitespace-nowrap px-6 py-4 font-bold'>
                {employeeData.id}
              </td>
              <td className='px-6 py-4'>
                <p>{employeeData.name}</p>
                <p>{employeeData.email}</p>
              </td>
              <td className={`px-6 py-4 capitalize`}>
                <span
                  className={`rounded-md px-2 py-1 ${classNames({
                    ['border border-green-300 bg-green-100 text-green-800']:
                      employeeData.status === EmployeeStatus.ACTIVE,
                    ['border border-red-300 bg-red-100 text-red-800']:
                      employeeData.status !== EmployeeStatus.ACTIVE,
                  })}`}
                >
                  {employeeData.status}
                </span>
              </td>
              <td className='px-6 py-4 text-right'>
                <Button
                  text='Edit'
                  onClick={(e) => onActionClick(employeeData)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
