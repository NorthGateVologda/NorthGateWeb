"use client"
import React, {useState} from 'react';
import DataTable from "react-data-table-component";
import {columns, customStyles, DataRow} from "@/widgets/table/columns";
import Filter from "@/entities/table/ui/filter";
import classes from './index.module.css';

const Table = ({
    city, 
    hexagons
}: {
    city: string | undefined, 
    hexagons: DataRow[]
}) => {
    const [filterPolygonId, setFilterPolygonId] = useState<number>(-1);
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
    const filteredItems = city === 'Default' ? [] : hexagons.filter(item => item.polygon_id && (filterPolygonId === -1 || item.polygon_id === filterPolygonId));
    const hexagonsIds = city === 'Default' ? [] : hexagons.map(item => item.polygon_id);

    return (
        <div className={classes.tableContainer}>
            <DataTable
                className={classes.table}
                title="Рекомендательный сервис размещения парков"
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
                pointerOnHover
                paginationResetDefaultPage={resetPaginationToggle}
                customStyles={customStyles}
                subHeader
                subHeaderComponent={
                    <Filter
                        hexagonsIds={hexagonsIds}
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