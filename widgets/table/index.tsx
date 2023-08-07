"use client"
import React, {useEffect, useState} from 'react';
import DataTable from "react-data-table-component";
import {columns, customStyles, DataRow} from "@/widgets/table/columns";
import {getTableData} from "@/entities/table/api/tableApi";
import Filter from "@/entities/table/ui/filter";
import classes from './index.module.css';
import {useTheme} from "@mui/material";

const Table = ({city}: {city: string}) => {
    const [data, setData] = useState<DataRow[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filterPolygonId, setFilterPolygonId] = useState<number>(-1);
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);

    const theme= useTheme();

    useEffect(() => {
        setLoading(true);

        if (city !== '' && city !== undefined) {
            getTableData()
                .then(res => {
                    setData(res);
                });
        }

        setLoading(false);
    }, [city]);


    const filteredItems = data.filter(
        // @ts-ignore
        item => item.polygon_id && (filterPolygonId === -1 || Number(item.polygon_id) === Number(filterPolygonId)),
    );

    return (
        <div className={classes.tableContainer}>
            <DataTable
                className={classes.table}
                title="Рекомендательный сервис размещения парков"
                columns={columns}
                data={filteredItems}
                progressPending={loading}
                pagination
                highlightOnHover
                pointerOnHover
                paginationResetDefaultPage={resetPaginationToggle}
                customStyles={customStyles}
                subHeader
                subHeaderComponent={
                    <Filter
                        filterPolygonId={filterPolygonId}
                        setFilterPolygonId={setFilterPolygonId}
                        resetPaginationToggle={resetPaginationToggle}
                        setResetPaginationToggle={setResetPaginationToggle}
                    />}
                persistTableHead
                responsive={true}
                paginationPerPage={20}
                paginationRowsPerPageOptions={[20, 25]}
            />
        </div>
    );
};

export {Table};