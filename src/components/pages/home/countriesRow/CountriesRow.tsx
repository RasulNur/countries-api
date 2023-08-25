import { FC, useState } from "react";
import Card from "../card/Card";
import Loading from "../../../ui/loading/Loading";
import "./countriesRow.scss";
import { useAppSelector } from "../../../../hooks/reduxHooks";
// import InfiniteScroll from "react-infinite-scroll";
import InfiniteScroll from "react-infinite-scroller";

const CountriesRow: FC = () => {
    const { countries, isLoading, isSuccess } = useAppSelector(
        (state) => state.countries
    );

    const [limit, setLimit] = useState(20);
    const increaseLimit = () => {
        const compareValue = limit + 20;
        const arrLength = countries.length;
        const subValue = arrLength - limit;

        limit === arrLength
            ? null
            : arrLength < compareValue
            ? setLimit(limit + subValue)
            : setLimit(limit + 12);
    };
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : isSuccess ? (
                <InfiniteScroll
                    className="countries-row"
                    pageStart={0}
                    loadMore={() => increaseLimit()}
                    hasMore={true || false}
                    loader={<div style={{ display: "none" }} key={0}></div>}>
                    {countries?.slice(0, limit).map((country) => (
                        <Card
                            key={country.name.common + "" + country.population}
                            country={country}
                        />
                    ))}
                </InfiniteScroll>
            ) : null}
        </>
    );
};

export default CountriesRow;
