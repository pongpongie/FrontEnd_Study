import { configureStore } from "@reduxjs/toolkit";

import ProfessorSlice from "./slices/ProfessorSlice";

const store = configureStore({
  reducer: {
    ProfessorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
