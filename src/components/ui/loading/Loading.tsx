import { FC } from "react";
import { Oval } from "react-loader-spinner";

const Loading: FC = () => {
    return (
        <>
            <Oval
                height={100}
                width={100}
                color="#d50055"
                wrapperStyle={{
                    width: "100%",
                    justifyContent: "center",
                }}
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#fff"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </>
    );
};

export default Loading;
