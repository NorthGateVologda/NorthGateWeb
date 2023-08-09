"use client"
import React, {useMemo, useState} from 'react';
import classes from './index.module.css';
import {Form} from "react-bootstrap";
import {Divider, Drawer, IconButton, Switch} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import {Bar, BarChart, Legend, Tooltip, XAxis} from 'recharts';
import { DataRow } from '../table/columns';
import {Buildings,
        NumOfParks,
        Population,
        PopulationPolygonsEffect,
        RatingPolygonsEffect,
        RecommendPolygons} from '@/entities/diagrams';
import { LogOut } from '@/entities/user';
import {FilterTableDropdown} from '@/entities/sidebar/ui/filter-table-dropdown';

const Sidebar = ({
        city,
        hexagons,
        houses,
        setCity,
        setHouses,
        setShowLog,
        layerType,
        setLayerType,
        hexagonFilterId,
        setHexagonFilterId
    }: {
        city: string | undefined,
        houses: boolean,
        hexagons: DataRow[],
        setCity: React.Dispatch<React.SetStateAction<string>>,
        setHouses: React.Dispatch<React.SetStateAction<boolean>>,
        setShowLog: React.Dispatch<React.SetStateAction<boolean>>,
        layerType: boolean,
        setLayerType: React.Dispatch<React.SetStateAction<boolean>>,
        hexagonFilterId: number,
        setHexagonFilterId: React.Dispatch<React.SetStateAction<number>>
    }) => {
    const [open, setOpen] = useState<boolean>(true);
    const filteredHexagons = city === 'Default' ? [] : hexagons.filter((item: {recommendation: number, rating: number}) => item.recommendation === 1 && item.rating !== 0);
    const hexagonsIds = city === 'Default' ? [] : hexagons.map(item => item.polygon_id);
    const handleDrawerClose = () => setOpen(false);
    const handleDrawerOpen = () => setOpen(true);
    const diagramWidth = 300;
    const diagramHeight = 300;

    return (
        <div className={classes.sidebar}>
            {
                !open ?
                    <div className={classes.sidebarClose}>
                        <IconButton
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </div> :
                    <Drawer
                        sx={{
                            width: '35vw',
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                display: 'flex',
                                flexDirection: 'column',
                                width: '35vw',
                                boxSizing: 'border-box',
                                position: 'absolute',
                                left: '0',
                                zIndex: '1000',
                                height: '100%'
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <div className={classes.header}>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                                <div>
                                    <div>
                                        Врата Севера
                                    </div>
                                    <div className={classes.headerSign}>
                                        Система выбора парков
                                    </div>
                                </div>
                            </IconButton>

                            <LogOut
                                setShowLog={setShowLog}
                            />
                        </div>

                        <Divider variant="fullWidth" color='#AAAAAA'/>

                        <Form.Group className={classes.container}>
                            <Form.Label>Город</Form.Label>
                            <div
                                className={classes.containerBody}
                            >
                                <Form.Select
                                    value={city}
                                    className={classes.spinner}
                                    onChange={event => {
                                        setCity(event.target.value);
                                    }}
                                >
                                    <option value="Default" disabled={true}>Выберите город</option>
                                    <option value="Архангельск">Архангельск</option>
                                </Form.Select>
                                <div>
                                    <Form.Label>Тепловая карта</Form.Label>
                                    <Switch
                                        value={layerType}
                                        onChange={(e) => setLayerType(e.target.checked)}
                                        color="default" />
                                    <Form.Label>Карта парков</Form.Label>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className={classes.containerCenter}>
                            <FilterTableDropdown
                                hexagonsIds={hexagonsIds}
                                setHexagonFilterId={setHexagonFilterId}
                                hexagonFilterId={hexagonFilterId}
                            />
                        </Form.Group>

                        <Divider variant="fullWidth" color='#AAAAAA'/>

                        <Form.Group className={classes.containerCenter}>
                            <Population hexagons={hexagons}/>
                        </Form.Group>

                        <Form.Group className={classes.container}>
                            <div className={classes.containerBody}>
                                <PopulationPolygonsEffect hexagons={hexagons}/>

                                <RatingPolygonsEffect hexagons={hexagons}/>
                            </div>
                        </Form.Group>
                        
                        <Divider variant="fullWidth" color='#AAAAAA'/>

                        <Form.Group className={classes.container}>
                            <div className={classes.containerBody}>
                                <NumOfParks hexagons={hexagons}/>

                                <RecommendPolygons hexagons={hexagons}/>
                            </div>
                        </Form.Group>

                        <Form.Group className={classes.containerCenter}>
                            <Buildings hexagons={hexagons}/>
                        </Form.Group>
                    </Drawer>
            }
        </div>
    );
};

export {Sidebar};