import { FC } from "react";
import { ErrorStatus } from "../../types/Error.interface";

import s from "./ErrorPage.module.scss";

const ErrorPage: FC<ErrorStatus> = ({ errorStatus }) => {
    return <div className={s.rootError}>Ошибка: {errorStatus}</div>;
};

export default ErrorPage;
