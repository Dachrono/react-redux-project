import { configureStore } from '@reduxjs/toolkit';
import { missionsSlice } from './slices';

export default configureStore({
  reducer: {
    missions: missionsSlice.reducer,
  },
});
