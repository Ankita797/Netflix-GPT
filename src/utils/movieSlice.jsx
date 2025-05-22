import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state, action)=>{
      state.trailerVideo= action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions; // ✅ must be exported like this
export default movieSlice.reducer;
