"use client"
import React, {useMemo, useState} from 'react';
import classes from './index.module.css';
import {Button, Form} from "react-bootstrap";
import {Divider, Drawer, IconButton, Switch} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Buildings,
    NumOfParks,
    Population,
    PopulationPolygonsEffect,
    RatingPolygonsEffect,
    RecommendPolygons
} from '@/entities/diagrams';
import {LogOut} from '@/entities/user';
import {Props} from "./type"
import {FilterTableDropdown} from '@/entities/sidebar/ui/filter-table-dropdown';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Info from "@/entities/sidebar/ui/info";

const Sidebar = ({
                     city,
                     hexagons,
                     houses,
                     setCity,
                     setHouses,
                     setShowLog,
                     layerType,
                     setLayerType,
                     setHexagonFilterId,
                     divHeight,
                     hexagonFilterId
                 }: Props) => {
    const [open, setOpen] = useState<boolean>(true);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const filteredHexagons = city === 'Default' ? [] : hexagons.filter((item: {
        recommendation: number,
        rating: number
    }) => item.recommendation === 1 && item.rating !== 0);
    const hexagonsIds = city === 'Default' ? [] : hexagons.map(item => item.polygon_id);
    const handleDrawerClose = () => setOpen(false);
    const handleDrawerOpen = () => setOpen(true);

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
                                height: divHeight <= 180 ? '100%' : `calc(100% - ${divHeight}px)`
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <div className={classes.header}>
                            <div className={classes.containerBody}>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon/>
                                    <div>
                                        <div>
                                            Врата Севера
                                        </div>
                                        <div className={classes.headerSign}>
                                            Система выбора парков
                                        </div>
                                    </div>
                                </IconButton>

                                <IconButton onClick={() => setShowInfo(true)}>
                                    <QuestionMarkIcon/>
                                </IconButton>
                            </div>

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
                                        color="default"/>
                                    <Form.Label>Карта парков</Form.Label>
                                </div>
                            </div>

                            <div className={classes.containerBody}>
                                <FilterTableDropdown
                                    hexagonsIds={hexagonsIds}
                                    setHexagonFilterId={setHexagonFilterId}
                                    hexagonFilterId={hexagonFilterId}
                                />

                                <div
                                    className='align-self-end'
                                >
                                    <Form.Check
                                        type="switch"
                                        label="Отобразить объекты"
                                        disabled={city === 'Default'}
                                        defaultChecked={houses}
                                        onChange={(event) => setHouses(event.target.checked)}
                                    />
                                </div>
                            </div>
                        </Form.Group>

                        <Divider variant="fullWidth" color='#AAAAAA'/>
                        {city !== 'Default' ?
                            <>
                                <Form.Group className={classes.containerCenter}>
                                    <Population hexagons={hexagons}/>
                                </Form.Group>

                                <Form.Group className={classes.container}>
                                    <div className={classes.containerBody}>
                                        <PopulationPolygonsEffect
                                            hexagons={hexagons}
                                            setHexagonFilterId={setHexagonFilterId}/>

                                        <RatingPolygonsEffect
                                            hexagons={hexagons}
                                            setHexagonFilterId={setHexagonFilterId}/>
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
                            </> :
                            <div/>
                        }
                    </Drawer>
            }

            <Info show={showInfo} setShow={setShowInfo}/>
        </div>
    );
};

export {Sidebar};