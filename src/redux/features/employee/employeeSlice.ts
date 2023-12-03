import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '@/redux/store';
import { EmployeeData } from '@/interfaces/employee.interface';
import { Direction, SortAttributes } from '@/components/EmployeeTable';

const initialState: {
  data: EmployeeData[];
  loading: boolean;
} = {
  data: [],
  loading: true,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setEmployee: (state, action: PayloadAction<EmployeeData[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    addEmployee: (state, action: PayloadAction<EmployeeData>) => {
      state.data.push(action.payload);
      state.loading = false;
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
      state.loading = false;
    },
    deleteEmployeeById: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(
        (employee) => employee.id !== action.payload
      );
      state.loading = false;
    },
  },
});

export const {
  setEmployee,
  addEmployee,
  updateEmployeeById,
  deleteEmployeeById,
  setIsLoading,
} = employeeSlice.actions;

export const getEmployee = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    const result = await fetch('http://localhost:3000/api/employee/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());

    dispatch(setEmployee(result.data));
  };
};

export const sortEmployee = (sort: {
  attribute: SortAttributes;
  direction: Direction;
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));

    const result = await fetch(
      `http://localhost:3000/api/employee?sort=${sort.attribute}&direction=${sort.direction}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((response) => response.json());

    dispatch(setEmployee(result.data));
  };
};

export const selectEmployee = (state: RootState) => state.employee.data;
export const fetchEmployeeLoading = (state: RootState) =>
  state.employee.loading;
