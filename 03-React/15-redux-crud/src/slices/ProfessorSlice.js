import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";
import reduxHelper from "../helpers/ReduxHelper";

const API_URL = "/professor";

export const getList = createAsyncThunk(
  "ProfessorSlice/getList",
  async (payload, { rejectWithValue }) => {
    let result = null;
    let args = { _sort: "id", _order: "desc" };

    if (payload.keyword) {
      args.name_like = payload.keyword;
    }

    try {
      result = await axiosHelper.get(API_URL, args);
    } catch (error) {
      result = rejectWithValue(err);
    }
    return result;
  }
);

export const getItem = createAsyncThunk(
  "ProfessorSlice/getItem",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axiosHelper.get(`${API_URL}/${payload.id}`);
    } catch (error) {
      result = rejectWithValue(err);
    }
    return result;
  }
);

export const postItem = createAsyncThunk(
  "ProfessorSlice/postItem",

  async (payload, { rejectWithValue }) => {
    let result = null;

    let args = {
      name: payload.name,
      userid: payload.userid,
      position: payload.position,
      sal: payload.sal || 0,
      hiredate: payload.hiredate || new Date().toISOString(),
      comm: payload.comm || 0,
      deptno: payload.deptno || 0,
    };

    try {
      result = await axiosHelper.post(API_URL, args);
    } catch (error) {
      result = rejectWithValue(err);
    }
    return result;
  }
);

export const putItem = createAsyncThunk(
  "ProfessorSlice/putItem",

  async (payload, { rejectWithValue }) => {
    let result = null;

    let args = {
      name: payload.name,
      userid: payload.userid,
      position: payload.position,
      sal: payload.sal || 0,
      hiredate: payload.hiredate || new Date().toISOString(),
      comm: payload.comm || 0,
      deptno: payload.deptno || 0,
    };

    try {
      result = await axiosHelper.post(`${API_URL}/${payload.id}`, args);
    } catch (error) {
      result = rejectWithValue(err);
    }
    return result;
  }
);

export const deleteItem = createAsyncThunk(
  "ProfessorSlice/deleteItem",

  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axiosHelper.delete(`${API_URL}/${payload.id}`);
    } catch (error) {
      result = rejectWithValue(err);
    }
    return result;
  }
);

const ProfessorSlice = reduxHelper.getDefaultSlice("ProfessorSlice", [
  getList,
  getItem,
  deleteItem,
  putItem,
  postItem,
]);

export default ProfessorSlice.reducer;
