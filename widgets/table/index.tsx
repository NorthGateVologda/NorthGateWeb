"use client"
import React, {useEffect, useRef, useState} from 'react';
import DataTable from "react-data-table-component";
import {columns, customStyles, DataRow} from "@/widgets/table/columns";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './index.module.css';
import {IconButton} from '@mui/material';
import {Props} from "@/widgets/table/type";

const Table = ({city, hexagons, hexagonFilterId, setHexagonFilterId, setDivHeight}: Props) => {
    let preparedHexagonFilterId: number;

    if (hexagonFilterId.endsWith('T')) {
        preparedHexagonFilterId = parseInt(hexagonFilterId.slice(0, -1));
    } else {
        preparedHexagonFilterId = parseInt(hexagonFilterId);
    }

    const filterAndSortData = () => {
        if (city === 'Default') {
            return [];
        }

        const filteredItems = hexagons.filter(item => item.polygon_id && (filterPolygonId === -1 || item.polygon_id === filterPolygonId));

        if (hexagonFilterId.endsWith('T')) {
            return filteredItems;
        } else {
            const selectedIndex = filteredItems.findIndex(item => item.polygon_id === preparedHexagonFilterId);

            if (selectedIndex !== -1) {
                return [filteredItems[selectedIndex], ...filteredItems.slice(0, selectedIndex), ...filteredItems.slice(selectedIndex + 1)];
            } else {
                return filteredItems;
            }
        }
    }

    const [filterPolygonId, setFilterPolygonId] = useState<number>(-1);
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const data = filterAndSortData();
    const [display, setDisplay] = useState<string>("display")
    const getStyleRow = [
        {
            when: (row: DataRow) => row.polygon_id === preparedHexagonFilterId,
            style: {
                backgroundColor: '#0d6efd',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        }
    ];
    const opened: boolean = false;

    const divRef = useRef(null);
    const expandMorRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        const targetNode = divRef.current;

        const observer = new MutationObserver(() => {
            //@ts-ignore
            const newHeight = targetNode?.clientHeight;
            setDivHeight(newHeight);
        });

        const observerOptions = {
            attributes: true,
            childList: true,
            subtree: true
        };
        //@ts-ignore
        observer.observe(targetNode, observerOptions);

        return () => {
            observer.disconnect();
        };
    }, []);

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

                <div id="table" ref={divRef}>
                    <DataTable
                        className={open ? classes.table : classes.table + ' ' + classes.minimizeTable}
                        title="Рекомендательный сервис размещения парков"
                        columns={columns}
                        data={data}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        paginationResetDefaultPage={resetPaginationToggle}
                        customStyles={customStyles}
                        persistTableHead
                        paginationPerPage={4}
                        paginationRowsPerPageOptions={[4]}
                        onRowClicked={(event) => {
                            setHexagonFilterId(event.polygon_id.toString() + "T");
                        }}
                        conditionalRowStyles={getStyleRow}
                    />
                </div>
            </div>
        </>
    );
};

export {Table};