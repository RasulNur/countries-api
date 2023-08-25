import { FC, useState, useEffect, FormEventHandler } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
    setCountries,
    setIsLoading,
    setIsSuccess,
} from "../../../store/countries/countriesSlice";
import { useLazyGetCountryQuery } from "../../../store/api/countryApi";
const Search: FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const { whiteMode } = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    const [getCountries, { data, isSuccess, isLoading }] =
        useLazyGetCountryQuery();

    const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        getCountries(`${searchValue}`);
        console.log(data);
        setSearchValue("");
    };

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
        <form className="search__form" onSubmit={(e) => handleSearch(e)}>
            <label className="search__label">
                <button type="submit">
                    <FaSearch
                        style={{
                            color: `${whiteMode ? "#848484" : "#fff"}`,
                        }}
                    />
                </button>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={`search__input search__input--${
                        whiteMode ? "white" : "dark"
                    }`}
                    type="text"
                    placeholder="Search for a country..."
                />
            </label>
        </form>
    );
};

export default Search;
