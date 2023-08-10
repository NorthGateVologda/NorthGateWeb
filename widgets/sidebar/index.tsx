"use client"
import React, {useState} from 'react';
import classes from './index.module.css';
import {Form} from "react-bootstrap";
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
                     hexagonFilterId,
                     openTable
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
                                width: 'fit-content',
                                position: 'absolute',
                                left: '0',
                                zIndex: '1000',
                                height: !openTable ? '100%' : `calc(100% - ${divHeight}px)`
                            },
                            '@media (max-width: 1000px)': {
                              height: !openTable ? '100%' : `calc(100% - ${divHeight}px) !important`,
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <div className={classes.header}>
                            <div className={classes.containerGroup}>
                                <IconButton onClick={handleDrawerClose} className={classes.sidebarHideButton}>
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
                            </div>

                            <div className={classes.containerGroupBodyRow}>
                                <IconButton onClick={() => setShowInfo(true)}>
                                    <QuestionMarkIcon/>
                                </IconButton>
                                <LogOut setShowLog={setShowLog} />
                            </div>
                        </div>

                        <Divider variant="fullWidth" color='#AAAAAA'/>

                        <Form.Group className={classes.container}>
                            <div className={classes.containerGroup}>
                                <div className={classes.containerGroupBodyRow}>
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
                                </div>
                                <div className={classes.containerGroupBodyRow}>
                                   <FilterTableDropdown
                                        hexagonsIds={hexagonsIds}
                                        setHexagonFilterId={setHexagonFilterId}
                                        hexagonFilterId={hexagonFilterId}
                                    />
                                </div>
                            </div>
                            <div className={classes.containerGroup}>
                                <div className={classes.containerGroupBodyRow}>
                                    <Form.Label style={{margin: 0}}>Карта плотности населения</Form.Label>
                                    <Switch
                                        value={layerType}
                                        onChange={(e) => setLayerType(e.target.checked)}
                                        disabled={city === 'Default'}
                                        color="default"/>
                                    <Form.Label style={{margin: 0}}>Карта парков</Form.Label>
                                </div>
                                <div className={classes.containerGroupBodyRow}>
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

                                <Divider variant="fullWidth" color='#AAAAAA'/>

                                <Form.Group className={classes.container}>
                                    <div className={classes.containerGroupBodyRow}>
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
                                    <div className={classes.containerGroupBodyRow}>
                                        <NumOfParks hexagons={hexagons}/>
                                        <RecommendPolygons hexagons={hexagons}/>
                                    </div>
                                </Form.Group>

                                <Divider variant="fullWidth" color='#AAAAAA'/>

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