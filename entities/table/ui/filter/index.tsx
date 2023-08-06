import React from 'react';
import classes from './index.module.css';

const Filer = ({filterPolygonId, setFilterPolygonId, resetPaginationToggle, setResetPaginationToggle}
                   : {filterPolygonId: number, setFilterPolygonId: React.Dispatch<React.SetStateAction<number>>,
                      resetPaginationToggle: boolean, setResetPaginationToggle: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const handleClear = () => {
        if (filterPolygonId) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterPolygonId(-1);
        }
    };

    return (
        <div className={classes.filter}>
            <input
                className={classes.textField}
                id="search"
                type="number"
                placeholder="Фильтрация по ID полигона"
                aria-label="Search Input"
                value={filterPolygonId === -1 ? '' : filterPolygonId}
                onChange={e => setFilterPolygonId(!e.target.value ? -1 : +e.target.value)}
            />

            <button
                className={classes.clearButton}
                type="button"
                onClick={handleClear}
            >
                Очистить
            </button>
        </div>
    );
};

export default Filer;