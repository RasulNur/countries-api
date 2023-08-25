import { FC } from "react";

import Search from "../../ui/search/Search";
import CountriesRow from "./countriesRow/CountriesRow";
import Filter from "../../ui/filter/Filter";
import "./home.scss";
const Home: FC = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="home__filters-wrapper">
                    <Search />

                    <Filter />
                </div>
                <CountriesRow />
            </div>
        </div>
    );
};

export default Home;
