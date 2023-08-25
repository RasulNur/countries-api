import { createSlice } from "@reduxjs/toolkit";

export interface IThemeState {
    whiteMode: boolean;
}

const initialState: IThemeState = {
    whiteMode: true,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            state.whiteMode = !state.whiteMode;
        },
    },
});

export const { toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
