import { FC, useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import FilterInput from "../FilterInput/FilterInput";
import ErrorPage from "../ErrorPage/ErrorPage";
import MyLoader from "../ContentLoader/ContentLoader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUsers } from "../../store/filterSlice";

import s from "./Content.module.scss";

const Content: FC = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [errorStatus, setErrorStatus] = useState<string>("");

    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.FilterSlice.users);
    const selectedNames = useSelector((state: RootState) => state.FilterSlice.selectedNames);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get("https://jsonplaceholder.typicode.com/users");
                dispatch(setUsers(result.data));
            } catch (error) {
                setErrorStatus(`Error:, ${error}`);
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [dispatch]);

    const filteredUsers =
        selectedNames.length > 0
            ? users.filter((user) =>
                  selectedNames.some((name) => user.name.toLowerCase().includes(name.toLowerCase())),
              )
            : users;

    return (
        <div className={s.content}>
            <div className={s.container}>
                <FilterInput />
                <ul className={s.cartList}>
                    {isLoading
                        ? [...new Array(10)].map((_, i) => <MyLoader key={i} />)
                        : filteredUsers.map((item) => <CartItem item={item} key={item.id} />)}
                </ul>
            </div>
            {errorStatus && <ErrorPage errorStatus={errorStatus} />}
        </div>
    );
};

export default Content;
