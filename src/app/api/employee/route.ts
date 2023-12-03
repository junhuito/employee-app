import { NextRequest } from 'next/server';
import employeeTestData from './employeeTestData.json';

export async function GET(request: NextRequest) {
  return Response.json({ data: employeeTestData });
}
