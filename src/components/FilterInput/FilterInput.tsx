import { useState, FC } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setNamesCleared, setFilter, setSelectedNames } from "../../store/filterSlice";

import arrow from "../../assets/svg/arrow.svg";
import s from "./FilterInput.module.scss";

const FilterInput: FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.FilterSlice.filter);
    const selectedNames = useSelector((state: RootState) => state.FilterSlice.selectedNames);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleInput = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            dispatch(setSelectedNames(filter));
            dispatch(setFilter(""));
            setIsDropdownOpen(false);
        }
    };

    const handleClearNames = () => {
        dispatch(setNamesCleared());
    };

    return (
        <div className={s.filterBlock}>
            <input
                className={s.filterInput}
                type="text"
                onChange={(e) => dispatch(setFilter(e.target.value))}
                onKeyDown={handleKeyDown}
                onClick={handleInput}
                value={filter}
                placeholder="Select name"
            />
            <img
                onClick={handleInput}
                src={arrow}
                alt="arrow"
                className={`${s.arrowInput} ${isDropdownOpen ? s.up : ""}`}
            />
            {isDropdownOpen && <Dropdown />}
            <div className={s.filterInfo}>
                <div className={s.filterCountClear}>
                    <span className={s.filterCount}>Filters: {selectedNames.length}</span>
                    <span className={s.filterClear} onClick={handleClearNames}>
                        Clear All
                    </span>
                </div>
                <div className={s.filterName}>
                    <span>Name: </span>
                    <span className={s.filterNameCount}>
                        {selectedNames.length ? selectedNames.join(", ") : "Empty yet"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FilterInput;
