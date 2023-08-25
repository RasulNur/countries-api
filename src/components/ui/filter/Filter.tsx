import { FC, useState, useEffect } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { useLazyGetCountriesQuery } from "../../../store/api/countryApi";
import {
    setCountries,
    setIsLoading,
    setIsSuccess,
} from "../../../store/countries/countriesSlice";

const Filter: FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("all");
    const { whiteMode } = useAppSelector((state) => state.theme);

    const options = [
        { value: "all", label: "All" },
        { value: "africa", label: "Africa" },
        { value: "america", label: "America" },
        { value: "asia", label: "Asia" },
        { value: "europe", label: "Europe" },
        { value: "oceania", label: "Oceania" },
    ];
    const dispatch = useAppDispatch();
    const [getCountries, { data, isSuccess, isLoading }] =
        useLazyGetCountriesQuery();

    useEffect(() => {
        if (selectedOption == "all") {
            getCountries(`all`);
        } else {
            getCountries(`region/${selectedOption}`);
        }
    }, [selectedOption]);

    useEffect(() => {
        dispatch(setCountries(data));
    }, [data]);

    useEffect(() => {
        dispatch(setIsSuccess(isSuccess));
    }, [isSuccess]);

    useEffect(() => {
        dispatch(setIsLoading(isLoading));
    }, [isLoading]);

    return (
        <>
            <Select
                className="select"
                options={options}
                isMulti={false}
                placeholder="Filter by Region"
                onChange={(value) => setSelectedOption(value!.value)}
                isSearchable={false}
                components={{
                    IndicatorSeparator: () => null,
                }}
                styles={{
                    singleValue: (base) => ({
                        ...base,
                        color: "inherit",
                    }),
                    control: (base) => ({
                        ...base,
                        backgroundColor: `${whiteMode ? "#fff" : "#2B3844"}`,
                        border: "none",
                        boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
                        width: "200px",
                        height: "56px",
                        borderRadius: "5px",
                        padding: "0 10px 0 16px",
                        cursor: "pointer",
                    }),
                    option: (styles) => ({
                        ...styles,
                        cursor: "pointer",
                        backgroundColor: `${whiteMode ? "#fff" : "#2B3844"}`,
                        "&:hover": {
                            backgroundColor: `${
                                whiteMode ? "#f0f0f0" : "#202C36"
                            }`,
                        },
                        color: "inherit",
                    }),
                    menuList: (provided) => ({
                        ...provided,
                        paddingTop: 0,
                        paddingBottom: 0,
                        border: "none",
                        borderRadius: "5px",
                        boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
                    }),
                    menu: (provided) => ({
                        ...provided,
                        border: "none",
                        borderRadius: "7px",
                        boxShadow: "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
                    }),
                    placeholder: (styles) => ({
                        ...styles,
                        color: "inherit",
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        color: "inherit",
                        "&:hover": {
                            color: "inherit",
                        },
                    }),
                }}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: `${whiteMode ? "#f8f8f8" : "#2d3843"}`, //option bg color selected

                        primary50: `${whiteMode ? "#f8f8f8" : "#2d3843"}`, // option bg color active(enavled or available)
                    },
                })}
            />
        </>
    );
};

export default Filter;
