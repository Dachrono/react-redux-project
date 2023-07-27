import { configureStore } from '@reduxjs/toolkit';
import { missionsSlice } from './missionsSlice';
import rocketsSliceReducer from './rocketsSlice';

export default configureStore({
  reducer: {
    missions: missionsSlice.reducer,
    rockets: rocketsSliceReducer,
  },
});
