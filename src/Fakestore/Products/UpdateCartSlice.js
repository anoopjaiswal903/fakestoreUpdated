import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateItem = createAsyncThunk(
  "item/updateItem",
  async (item, { getState, dispatch }) => {
    const { data } = await axios.patch(
      `/https://jsonplaceholder.typicode.com/users/${item.id}`
    );
    return data;
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // ...
  },
  extraReducers: {
    [updateItem.pending]: (state) => {
      state.status = "loading";
    },
    [updateItem.fulfilled]: (state, action) => {
      const { items } = state;
      const index = items.findIndex((i) => i.id === action.payload.id);
      items[index] = action.payload;
      state.items = items;
      state.status = "succeeded";
    },
    [updateItem.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default itemsSlice.reducer;

export const selectItems = (state) => state.items.items;
export const selectStatus = (state) => state.items.status;
export const selectError = (state) => state.items.error;
