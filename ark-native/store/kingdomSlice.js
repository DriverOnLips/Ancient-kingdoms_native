import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    kingdoms: [],
    kingdom: {},
};

export const kingdomSlice = createSlice({
    name: 'kingdom',
    initialState,
    reducers: {
        setKingdoms: (state, { payload }) => {
            state.kingdoms = payload;
        },
        setKingdom: (state, { payload }) => {
            state.kingdom = payload;
        },
        resetKingdom: (state) => {
            state.kingdom = {};
        },
    },
});

export const kingdomReducer = kingdomSlice.reducer;

export const { setKingdoms, setKingdom, resetKingdom } = kingdomSlice.actions;
