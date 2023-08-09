"use client"
import React, {useState} from 'react';
import DataTable from "react-data-table-component";
import {columns, customStyles, DataRow} from "@/widgets/table/columns";
import Filter from "@/entities/table/ui/filter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import classes from './index.module.css';
import { IconButton } from '@mui/material';

const Table = ({
    city, 
    hexagons
}: {
    city: string | undefined, 
    hexagons: DataRow[]
}) => {
    const [filterPolygonId, setFilterPolygonId] = useState<number>(-1);
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const filteredItems = city === 'Default' ? [] : hexagons.filter(item => item.polygon_id && (filterPolygonId === -1 || item.polygon_id === filterPolygonId));
    const hexagonsIds = city === 'Default' ? [] : hexagons.map(item => item.polygon_id);

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
                <IconButton
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <ExpandLessIcon
                        className={classes.arrow}
                        color='action'
                    />
                </IconButton>
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
                    responsive={true}
                    paginationPerPage={20}
                    paginationRowsPerPageOptions={[20, 21]}
                />
            </div>
        </>
    );
};

export {Table};