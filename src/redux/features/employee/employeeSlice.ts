import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '@/redux/store';
import { EmployeeData } from '@/interfaces/employee.interface';
import { EmployeeStatus } from '@/constants/employee.enum';

const initialState: {
  data: EmployeeData[];
} = {
  data: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployee: (state, action: PayloadAction<EmployeeData[]>) => {
      state.data = action.payload;
    },
    addEmployee: (state, action: PayloadAction<EmployeeData>) => {
      state.data.push(action.payload);
    },
    updateEmployeeById: (state, action: PayloadAction<EmployeeData>) => {
      state.data = state.data.map((employee) => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            ...action.payload,
          };
        }
        return employee;
      });
    },
    deleteEmployeeById: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const {
  setEmployee,
  addEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} = employeeSlice.actions;

export const getEmployee = () => {
  return async (dispatch: AppDispatch) => {
    // TODO:: remove mock client data when axios is implemented
    // mock client data
    await new Promise((res) => {
      setTimeout(res, 2000);
    });
    dispatch(
      setEmployee([
        {
          id: 1,
          name: 'John',
          email: 'john@example.com',
          status: EmployeeStatus.ACTIVE,
        },
        {
          id: 2,
          name: 'Ali',
          email: 'ali@example.com',
          status: EmployeeStatus.ACTIVE,
        },
      ])
    );
  };
};

export const selectEmployee = (state: RootState) => state.employee.data;
