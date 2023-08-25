import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMoon } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { toggleThemeMode } from "../../../store/theme/themeSlice";
import "./header.scss";

const Header: FC = () => {
    const { whiteMode } = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        document.body.style.background = `${whiteMode ? "#FAFAFA" : "#202C36"}`;
        document.body.style.color = `${whiteMode ? "#111517" : "#fff"}`;
    }, [whiteMode]);

    return (
        <header className={`header header--${whiteMode ? "white" : "dark"} `}>
            <div className="container">
                <div className="header__wrapper">
                    <Link className="header__logo" to="/">
                        Where in the world?
                    </Link>

                    <button
                        className="header__mode-toggler"
                        onClick={() => dispatch(toggleThemeMode())}>
                        {whiteMode ? <HiOutlineMoon /> : <MdLightMode />}

                        {whiteMode ? "Dark Mode" : "White Mode"}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
