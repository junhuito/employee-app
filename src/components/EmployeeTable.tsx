import { Button } from "./Button";
import { EmployeeData } from "@/interfaces/employee.interface";

export type EmployeeTable = {
  data: EmployeeData[];
  onActionClick?: (callback: EmployeeData) => void;
};

export const EmployeeTable = ({
  data = [],
  onActionClick = () => void 0,
}: EmployeeTable) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm md:table-fixed text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employeeData) => (
            <tr
              key={employeeData.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {employeeData.id}
              </th>
              <td className="px-6 py-4">{employeeData.name}</td>
              <td className="px-6 py-4">{employeeData.email}</td>
              <td className="px-6 py-4 capitalize">{employeeData.status}</td>
              <td className="px-6 py-4 text-right">
                <Button
                  text="Update"
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
