import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchdata = createAsyncThunk('get/fetchdata', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});

const initialState = {
  info: [],
  isLoading: false,
  error: undefined,
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    addReservedMission(state, action) {
      const missionId = action.payload;
      const existingMission = state.info.find(
        (mission) => mission.mission_id === missionId,
      );
      if (existingMission) {
        existingMission.reserved = true;
      }
    },
    removedMission(state, action) {
      const missionId = action.payload;
      const existingMission = state.info.find(
        (mission) => mission.mission_id === missionId,
      );
      if (existingMission) {
        existingMission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchdata.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        info: action.payload,
      }))
      .addCase(fetchdata.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: 'Error',
      }));
  },

});

export const { addReservedMission, removedMission } = missionsSlice.actions;

export const otra = createSlice({
  name: 'otra',
});
