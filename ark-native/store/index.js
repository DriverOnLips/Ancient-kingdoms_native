import { configureStore } from '@reduxjs/toolkit';
import { kingdomReducer } from './kingdomSlice';

export const store = configureStore({ reducer: { kingdom: kingdomReducer } });
