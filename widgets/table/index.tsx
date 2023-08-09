"use client"
import React, {useState} from 'react';
import DataTable, {TableColumn} from "react-data-table-component";
import {columns, customStyles, DataRow} from "@/widgets/table/columns";
import Filter from "@/entities/table/ui/filter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './index.module.css';
import { IconButton } from '@mui/material';

const Table = ({
    city, 
    hexagons,
    hexagonFilterId,
    setHexagonFilterId
}: {
    city: string | undefined, 
    hexagons: DataRow[],
    hexagonFilterId: number,
    setHexagonFilterId: React.Dispatch<React.SetStateAction<number>>
}) => {
    const [filterPolygonId, setFilterPolygonId] = useState<number>(-1);
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const filteredItems = city === 'Default' ? [] : hexagons.filter(item => item.polygon_id && (filterPolygonId === -1 || item.polygon_id === filterPolygonId));
    const hexagonsIds = city === 'Default' ? [] : hexagons.map(item => item.polygon_id);

    const getStyleRow = [
        {
            when: (row: DataRow) => row.polygon_id === hexagonFilterId,
                        style: {
                                backgroundColor: '#0d6efd',
                                color: 'white',
                            '&:hover': {
                        cursor: 'pointer',
                    },
                },
            }
        ];

    return (
        <>
            <IconButton
                className={classes.bottomArrow}
                onClick={() => {
                    setOpen(true);
                }}
            >
                <ExpandLessIcon
                    className={classes.arrow}
                    color='action'
                />
            </IconButton>

            <div className={open ? classes.tableContainer : classes.tableContainer + ' ' + classes.hidden}>
                <div className={classes.topArrowContainer}>
                    <IconButton
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <ExpandMoreIcon
                            className={classes.arrowTop}
                            color='action'
                        />
                    </IconButton>
                </div>

                <DataTable
                    className={open ? classes.table : classes.table + ' ' + classes.minimizeTable}
                    title="Рекомендательный сервис размещения парков"
                    columns={columns}
                    data={filteredItems}
                    pagination
                    highlightOnHover
                    pointerOnHover
                    paginationResetDefaultPage={resetPaginationToggle}
                    customStyles={customStyles}
                    persistTableHead
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10]}
                    onRowClicked={(event) => {
                        setHexagonFilterId(event.polygon_id);
                    }}      
                    conditionalRowStyles={getStyleRow}
                />
            </div>
        </>
    );
};

export {Table};