import { EmployeeStatus } from "@/constants/employee.enum";
import { Button } from "./Button";
import { EmployeeData } from "@/interfaces/employee.interface";
import classNames from "classnames";

export type EmployeeTable = {
  data: EmployeeData[];
  onActionClick?: (callback: EmployeeData) => void;
};

export const EmployeeTable = ({
  data = [],
  onActionClick = () => void 0,
}: EmployeeTable) => {
  return (
    <div className="relative overflow-x-auto shadow-md border-2 dark:border-none rounded-lg">
      <table className="w-full text-sm md:table-fixed text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 border-b-2 dark:border-none text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Employees
        </caption>
        <thead className="text-xs border-b-2 dark:border-none text-gray-700 uppercas bg-stone-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="capitalize px-6 py-3">
              ID
            </th>
            <th scope="col" className="capitalize px-6 py-3">
              Name & Email
            </th>
            <th scope="col" className="capitalize px-6 py-3">
              Status
            </th>
            <th scope="col" className="capitalize px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employeeData) => (
            <tr
              key={employeeData.id}
              className="bg-white border-b-2 text-xs dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td
                scope="row"
                className="px-6 py-4 whitespace-nowrap font-bold"
              >
                {employeeData.id}
              </td>
              <td className="px-6 py-4">
                <p>
                  {employeeData.name} 
                </p>
                <p>
                  {employeeData.email}
                </p>
              </td>
              <td className={`px-6 py-4 capitalize`}>
                <span className={`px-2 py-1 rounded-md ${classNames({
                  ['border border-green-300 bg-green-100 text-green-800']: employeeData.status === EmployeeStatus.ACTIVE,
                  ['border border-red-300 bg-red-100 text-red-800']: employeeData.status !== EmployeeStatus.ACTIVE,
                })}`}>
                  {employeeData.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <Button
                  text="Edit"
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
