import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";

const API_URL = "/grade";

export const getList = createAsyncThunk(
  "GradeSlice/getList",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axiosHelper.get(API_URL);
    } catch (error) {
      result = rejectWithValue(error);
    }
    return result;
  }
);

const GradeSlice = createSlice({
  name: "GradeSlice",

  initialState: {
    status: 200,
    message: "OK",
    item: null,
    timestamp: null,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state, { meta, payload }) => {
      return { ...state, loading: true };
    });

    builder.addCase(getList.fulfilled, (state, { meta, payload }) => {
      return {
        status: payload.status,
        message: payload.message,
        item: payload.item,
        timestamp: payload.timestamp,
        loading: false,
      };
    });

    builder.addCase(getList.rejected, (state, { meta, payload }) => {
      return {
        ...state,
        loading: false,
        status: payload.status || 0,
        message: payload.message || "unknown error",
      };
    });
  },
});

export default GradeSlice.reducer;
