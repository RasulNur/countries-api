import { FC } from "react";
import { ICountry } from "../../../../types/types";
import "./card.scss";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { Link } from "react-router-dom";
interface ICardProps {
    country: ICountry;
}

const Card: FC<ICardProps> = ({ country }) => {
    const { whiteMode } = useAppSelector((state) => state.theme);

    return (
        <div
            className="home-card"
            style={{
                backgroundColor: `${whiteMode ? "#fff" : "#2B3844"}`,
            }}>
            <Link
                className="home-card__link"
                to={`/details/${country.name.common}`}>
                <img
                    className="home-card__img"
                    src={country.flags.png}
                    alt={country.flags.alt}
                />
                <div className="home-card__bottom">
                    <h3 className="home-card__country-name">
                        {country.name.common}
                    </h3>
                    <ul className="home-card__list">
                        <li className="home-card__list-item">
                            <span>Population: </span>
                            {country.population.toLocaleString("en-US")}
                        </li>
                        <li className="home-card__list-item">
                            <span>Region: </span>
                            {country.region}
                        </li>
                        <li className="home-card__list-item">
                            <span>Capital: </span>
                            {country.capital[0]}
                        </li>
                    </ul>
                </div>
            </Link>
        </div>
    );
};

export default Card;
