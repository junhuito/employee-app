import { EmployeeStatus } from "@/constants/employee.enum";

export interface EmployeeData {
    id: number;
    name: string;
    email: string;
    status: EmployeeStatus
}
