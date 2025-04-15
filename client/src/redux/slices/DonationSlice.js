import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5500"; // Replace with your API URL

export const createOrder = createAsyncThunk(
  "donation/createOrder",
  async (donationData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/payment/create-order`, donationData, {withCredentials: true});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyPayment = createAsyncThunk(
  "donation/verifyPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/v1/payment/verify-payment`, paymentData, {withCredentials: true});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const donationSlice = createSlice({
  name: "donation",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPayment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default donationSlice.reducer;