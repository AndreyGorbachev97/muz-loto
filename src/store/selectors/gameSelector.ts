import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Song } from '../types';

// Базовый селектор для получения состояния items
const selectItemsState = (state: RootState) => state.game;

// Селектор для получения списка items
export const songsSelect = createSelector(
  [selectItemsState],
  (state) => {
    const board = localStorage.getItem('board');
    const parsedBoard: Song[] = board ? JSON.parse(board) : '';
    console.log('parsedBoard', parsedBoard)
    return parsedBoard || state.songs || []
  }
);

export const isGameOverSelect = createSelector([selectItemsState], (state) => state.isGameOver)
