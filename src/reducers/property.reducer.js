import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PropertyService from "../services/property";

const initialState = {
  all_property: [],
  property: {},
  result: "",
  loading: "idle",
  error: null,
};

let modulePrefix = "property";

export const getProperty = createAsyncThunk(
  `${modulePrefix}/get-property`,
  async () => {
    try {
      const response = await PropertyService.getProperty();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getPropertyById = createAsyncThunk(
  `${modulePrefix}/get-property-by-id`,
  async (data) => {
    try {
      const response = await PropertyService.getPropertyById(data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProperty.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getProperty.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.all_property = action.payload;
      })
      .addCase(getProperty.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      })
      .addCase(getPropertyById.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(getPropertyById.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.property = action.payload;
      })
      .addCase(getPropertyById.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action?.payload;
      });
  },
});

export default propertySlice.reducer;
