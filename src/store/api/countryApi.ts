import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../../types/types";

const API_URL = "https://restcountries.com/v3.1/";

export const countryApi = createApi({
    reducerPath: "api",
    tagTypes: ["Country"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getCountries: builder.query<ICountry[], string>({
            query: (searchTerm) => {
                return `${searchTerm}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`;
            },
        }),
        getCountry: builder.query<ICountry[], string>({
            query: (searchTerm) => {
                return `name/${searchTerm}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders`;
            },
        }),
    }),
});

export const {
    useGetCountriesQuery,
    useLazyGetCountriesQuery,
    useGetCountryQuery,
    useLazyGetCountryQuery,
} = countryApi;
