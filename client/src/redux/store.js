import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './slices/DonationSlice'; 

const store = configureStore({
  reducer: {
    // Add your reducers here
    donation : donationReducer
  }
});

export default store;