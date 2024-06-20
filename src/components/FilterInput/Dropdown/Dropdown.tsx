import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setSelectedNames } from "../../../store/filterSlice";

import s from "./Dropdown.module.scss";

const Dropdown: FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.FilterSlice.users);
    const filter = useSelector((state: RootState) => state.FilterSlice.filter.toLowerCase());
    const selectedNames = useSelector((state: RootState) => state.FilterSlice.selectedNames);

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(filter));

    return (
        <ul className={s.dropdown}>
            {filteredUsers.map((item) => (
                <li key={item.id} className={s.option}>
                    <input
                        type="checkbox"
                        className={s.checkName}
                        onChange={() => dispatch(setSelectedNames(item.name))}
                        checked={selectedNames.includes(item.name)}
                    />
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
