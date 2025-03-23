import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../types";

interface GameState {
  songs: Song[];
  isGameOver: boolean;
}

const initialState: GameState = {
  songs: [],
  isGameOver: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
    },
    endGame: (state) => {
      state.isGameOver = true;
    },
  },
});

export const { setSongs, endGame } = gameSlice.actions;

export default gameSlice;