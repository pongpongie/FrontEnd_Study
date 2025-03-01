import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./slices/CounterSlice";
import GradeSlice from "./slices/GradeSlice";

const store = configureStore({
  reducer: {
    CounterSlice,
    GradeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
