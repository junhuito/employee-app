import { NextRequest } from 'next/server';
import employeeTestData from '../employeeTestData.json';

export async function GET(request: NextRequest, context: any) {
  const { id } = context.params;
  return Response.json({
    data:
      employeeTestData.find((employee) => employee.id === Number(id)) ?? null,
  });
}
