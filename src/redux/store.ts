import { configureStore } from '@reduxjs/toolkit';
import { employeeSlice } from './features/employee/employeeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [employeeSlice.name]: employeeSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // TODO: Implement axios service
        // thunk: {
        //   extraArgument: {
        //     api: axiosService
        //   }
        // }
        thunk: true,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
