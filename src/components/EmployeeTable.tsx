import { EmployeeStatus } from '@/constants/employee.enum';
import { Button } from './Button';
import { EmployeeData } from '@/interfaces/employee.interface';
import classNames from 'classnames';
import { ColorsUtils } from '@/utils';
import { useEffect, useState } from 'react';
import { SkeletonTable } from './SkeletonTable';

export type SortAttributes = 'name' | 'status' | 'id';
export type Direction = 'ASC' | 'DESC';

export type EmployeeTable = {
  data: EmployeeData[];
  isLoading?: boolean;
  onActionClick?: (callback: EmployeeData) => void;
  onCaretClick?: (callback: {
    attribute: SortAttributes;
    direction: Direction;
  }) => void;
};

export const EmployeeTable = ({
  data = [],
  isLoading = true,
  onActionClick = () => void 0,
  onCaretClick = () => void 0,
}: EmployeeTable) => {
  const [sort, setSort] = useState<{
    attribute: SortAttributes;
    direction: Direction;
  } | null>(null);

  const getReverseDirection = (direction: Direction = 'ASC'): Direction => {
    const reverse: Record<Direction, Direction> = {
      ASC: 'DESC',
      DESC: 'ASC',
    };
    return reverse[direction];
  };

  useEffect(() => {
    if (sort) onCaretClick(sort);
  }, [onCaretClick, sort]);

  return (
    <div className='relative overflow-x-auto border-none'>
      <table className='w-full rounded-lg text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400 md:table-fixed'>
        <caption className='p-5 text-left text-lg font-semibold rtl:text-right dark:border-none  dark:text-white'>
          Employees
        </caption>
        <thead className='uppercas border-b-2 border-t-2 bg-stone-50 text-xs text-gray-700 dark:border-none dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 uppercase'>
              <div
                onClick={() =>
                  setSort((prev) => ({
                    attribute: 'id',
                    direction: getReverseDirection(prev?.direction),
                  }))
                }
                className='flex cursor-pointer items-center'
              >
                Id
                <svg
                  className='ms-1.5 h-3 w-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                </svg>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 uppercase'>
              <div
                onClick={() =>
                  setSort((prev) => ({
                    attribute: 'name',
                    direction: getReverseDirection(prev?.direction),
                  }))
                }
                className='flex cursor-pointer items-center'
              >
                Name & Email
                <svg
                  className='ms-1.5 h-3 w-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                </svg>
              </div>
            </th>
            <th scope='col' className='flex px-6 py-3 uppercase'>
              <div
                onClick={() =>
                  setSort((prev) => ({
                    attribute: 'status',
                    direction: getReverseDirection(prev?.direction),
                  }))
                }
                className='flex cursor-pointer items-center'
              >
                Status
                <svg
                  className='ms-1.5 h-3 w-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                </svg>
              </div>
            </th>
            <th scope='col' className='px-6 py-3 uppercase'>
              <span className='sr-only'>Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <SkeletonTable loading={isLoading} />
          {!isLoading &&
            data.map((employeeData) => (
              <tr
                key={employeeData.id}
                className='border-b-2 bg-white text-xs hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
              >
                <td
                  scope='row'
                  className='whitespace-nowrap px-6 py-4 font-bold'
                >
                  {employeeData.id}
                </td>
                <td className='px-6 py-4'>
                  <div className='flex items-center'>
                    <div
                      style={{
                        backgroundColor: ColorsUtils.stringToColor(
                          employeeData.name.slice(0, 2)
                        ),
                      }}
                      className='relative mr-2 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600'
                    >
                      <span className='font-medium text-white'>
                        {employeeData.name.slice(0, 1)}
                      </span>
                    </div>
                    <div>
                      <p>{employeeData.name}</p>
                      <p>{employeeData.email}</p>
                    </div>
                  </div>
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
