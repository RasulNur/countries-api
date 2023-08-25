import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import countriesReducer from "./countries/countriesSlice";
import { countryApi } from "./api/countryApi";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        countries: countriesReducer,
        [countryApi.reducerPath]: countryApi.reducer,
    },
    middleware: (getDefauldMiddleware) =>
        getDefauldMiddleware({ serializableCheck: false }).concat(
            countryApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
