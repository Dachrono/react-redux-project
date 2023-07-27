import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');

    const data = await response.json();
    return data.map((rocket) => ({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
      isReserved: false,
    }));
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookingRocket: (state, action) => {
      const id = parseInt(action.payload, 10);
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          // console.log(`Rocket ${rocket.id} is reserved`);
          return { ...rocket, isReserved: true };
        }
        return rocket;
      });
    },
    cancelBooking: (state, action) => {
      const id = parseInt(action.payload, 10);
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          // console.log(`Rocket ${rocket.id} reserve was canceled`);
          return { ...rocket, isReserved: false };
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
export const { bookingRocket, cancelBooking } = rocketsSlice.actions;
