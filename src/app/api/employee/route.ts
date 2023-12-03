import { NextRequest } from 'next/server';
import employeeTestData from './employeeTestData.json';
import { Direction, SortAttributes } from '@/components/EmployeeTable';
import { EmployeeStatus } from '@/constants/employee.enum';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const attribute = url.searchParams.get('sort') as SortAttributes;
  const direction = url.searchParams.get('direction') as Direction;
  const search = url.searchParams.get('search');

  const statusNormalized = (attribute: string) => {
    const statusMapping: Record<string, number> = {
      [EmployeeStatus.ACTIVE]: 0,
      [EmployeeStatus.DEACTIVATED]: 1,
    };

    return statusMapping[attribute] ?? attribute;
  };

  if (search) {
    employeeTestData.employees = employeeTestData.employees.filter(
      (employee) => {
        const str = Object.values(employee).join(' ');
        return str.search(/search/i);
      }
    );
  }

  if (attribute) {
    employeeTestData.employees.sort((a, b) => {
      const anyA = statusNormalized(a[attribute]) as any;
      const anyB = statusNormalized(b[attribute]) as any;

      if (typeof anyA === 'string') {
        return direction === 'ASC'
          ? anyA.localeCompare(anyB)
          : anyB.localeCompare(anyA);
      }

      return direction === 'ASC' ? anyA - anyB : anyB - anyA;
    });
  }

  await new Promise((res) => setTimeout(res, 500));

  return Response.json({ data: employeeTestData.employees });
}
