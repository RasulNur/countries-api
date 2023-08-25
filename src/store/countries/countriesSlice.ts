import { createSlice } from "@reduxjs/toolkit";
import { ICountry } from "../../types/types";

export interface ICountriesState {
    countries: ICountry[];
    isSuccess: boolean;
    isLoading: boolean;
}

const initialState: ICountriesState = {
    countries: [],
    isSuccess: false,
    isLoading: false,
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries: (state, { payload }) => {
            state.countries = payload;
        },
        setIsSuccess: (state, { payload }) => {
            state.isSuccess = payload;
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
    },
});

export const { setCountries, setIsSuccess, setIsLoading } =
    countriesSlice.actions;

export default countriesSlice.reducer;
