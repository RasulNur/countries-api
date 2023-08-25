import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCountryQuery } from "../../../store/api/countryApi";
import { BiArrowBack } from "react-icons/bi";
import Loading from "../../ui/loading/Loading";
import "./details.scss";
import { useAppSelector } from "../../../hooks/reduxHooks";
const Details: FC = () => {
    const { country } = useParams();
    const navigate = useNavigate();
    const { whiteMode } = useAppSelector((state) => state.theme);
    const { data, isLoading, isSuccess } = useGetCountryQuery(`${country}`);

    return (
        <div className="details">
            <div className="container">
                <button
                    style={{
                        backgroundColor: `${whiteMode ? "#fff" : "#2B3844"}`,
                    }}
                    className="details__back-btn"
                    onClick={() => navigate(-1)}>
                    <BiArrowBack /> Back
                </button>
                {isLoading ? (
                    <Loading />
                ) : isSuccess ? (
                    data &&
                    data[0] && (
                        <div className="details__content">
                            <img
                                src={data && data[0].flags.png}
                                alt={data && data[0].flags.alt}
                                className="details__image"
                            />

                            <div className="details__info-wrapper">
                                <h2 className="details__info-name">
                                    {data && data[0].name.common}
                                </h2>

                                <div className="details__info-lists">
                                    <ul className="details__info-list">
                                        <li className="details__info-list-item">
                                            <span>Native Name: </span>
                                            {data && data[0].name.official}
                                        </li>
                                        <li className="details__info-list-item">
                                            <span>Population: </span>
                                            {data &&
                                                data[0].population.toLocaleString(
                                                    "en-US"
                                                )}
                                        </li>
                                        <li className="details__info-list-item">
                                            <span>Region: </span>
                                            {data && data[0].region}
                                        </li>
                                        <li className="details__info-list-item">
                                            <span>Sub Region: </span>
                                            {data && data[0].subregion}
                                        </li>
                                        <li className="details__info-list-item">
                                            <span>Capital: </span>
                                            {data &&
                                                data[0].capital
                                                    .map((el, id, arr) =>
                                                        id === arr.length - 1
                                                            ? el
                                                            : `${el}, `
                                                    )
                                                    .join("")}
                                        </li>
                                    </ul>
                                    <ul className="details__info-list">
                                        <li className="details__info-list-item">
                                            <span>Top Level Domain: </span>
                                            {data &&
                                                data[0].tld
                                                    .map((el, id, arr) =>
                                                        id === arr.length - 1
                                                            ? el
                                                            : `${el}, `
                                                    )
                                                    .join("")}
                                        </li>
                                        <li className="details__info-list-item">
                                            <span>Currencies: </span>
                                            {data &&
                                                Object.values(
                                                    data[0].currencies
                                                )
                                                    .slice(0, 2)
                                                    .map(({ name }) => name)
                                                    .join(", ")}
                                        </li>
                                        <li className="details__info-list-item">
                                            <span>Languages: </span>

                                            {data &&
                                                Object.values(data[0].languages)
                                                    .slice(0, 3)
                                                    .join(", ")}
                                        </li>
                                    </ul>
                                </div>

                                {data && data[0].borders.length > 0 ? (
                                    <div className="details__borders">
                                        <h3 className="details__borders-heading">
                                            Border countries:{" "}
                                        </h3>

                                        <ul className="details__borders-list">
                                            {data &&
                                                data[0].borders
                                                    ?.slice(0, 5)
                                                    .map((el) => {
                                                        return (
                                                            <li
                                                                style={{
                                                                    backgroundColor: `${
                                                                        whiteMode
                                                                            ? "#fff"
                                                                            : "#2B3844"
                                                                    }`,
                                                                }}
                                                                className="details__borders-item"
                                                                key={el}>
                                                                {el}
                                                            </li>
                                                        );
                                                    })}
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    )
                ) : null}
            </div>
        </div>
    );
};

export default Details;
