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
    // TODO:: implement axios service
    const result = await fetch('http://localhost:3000/api/employee/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());

    dispatch(setEmployee(result.data));
  };
};

export const selectEmployee = (state: RootState) => state.employee.data;
