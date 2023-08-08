import React, {useState} from 'react';
import classes from './index.module.css';
import {Form} from "react-bootstrap";
import {Divider, Drawer, IconButton} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import {Bar, BarChart, Legend, Tooltip, XAxis} from 'recharts';
import { DataRow } from '../table/columns';
import CustomTooltip from '@/entities/sidebar/ui/tooltip';

const Sidebar = ({
    city,
    hexagons,
    houses,
    setCity,
    setHouses,
}: {
    city: string | undefined,
    houses: boolean,
    hexagons: DataRow[],
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setHouses: React.Dispatch<React.SetStateAction<boolean>>,
}) => {
    const [open, setOpen] = useState<boolean>(true);
    const filteredHexagons = !city ? [] : hexagons.filter((item: {recommendation: number, rating: number}) => item.recommendation === 1 && item.rating !== 0);
    const handleDrawerClose = () => setOpen(false);
    const handleDrawerOpen = () => setOpen(true);
    const diagramWidth = 300;
    const diagramHeight = 300;

    console.log(city)

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
                            width: 'fit-content',
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                display: 'flex',
                                flexDirection: 'column',
                                width: 'fit-content',
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
                        <div>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                                <div>Врата Севера</div>
                            </IconButton>
                        </div>

                        <Divider variant="fullWidth" color='#AAAAAA'/>

                        <Form.Group className={classes.container}>
                            <Form.Label>Город</Form.Label>
                            <Form.Select
                                defaultValue={!city ? "Default" : city}
                                className={classes.spinner}
                                onChange={event => {
                                    setCity(event.target.value);
                                }}
                            >
                                <option value="Default" disabled={true}>Выберите город</option>
                                <option value="Архангельск">Архангельск</option>
                            </Form.Select>

                            <Form.Label>Население в полигоне</Form.Label>
                            <div className={classes.descriptionColors}>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#800026"}}/>
                                    <div>
                                        - 8000 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#BD0026"}}/>
                                    <div>
                                        - 5000 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#E31A1C"}}/>
                                    <div>
                                        - 4000 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FC4E2A"}}/>
                                    <div>
                                        - 3000 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FD8D3C"}}/>
                                    <div>
                                        - 2000 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FEB24C"}}/>
                                    <div>
                                        - 1000 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FED976"}}/>
                                    <div>
                                        - 500 человек
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FFEDA0"}}/>
                                    <div>
                                        - меньше 500 человек
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        <Divider variant="fullWidth" color='#AAAAAA'/>

                        <Form.Group className={classes.container}>
                            <Form.Label>Объекты</Form.Label>
                            <Form.Check
                                type="switch"
                                label="Отобразить объекты"
                                disabled={!city}
                                defaultChecked={houses}
                                onChange={(event) => setHouses(event.target.checked)}
                            />

                            <div className={classes.descriptionColors}>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FF3D64"}}/>
                                    <div>
                                        - Объекты социальной инфраструктуры
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#4DA2F1"}}/>
                                    <div>
                                        - Объект транспортной инфраструктуры
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#FF8918"}}/>
                                    <div>
                                        - Объекты бизнеса
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#18FFC1"}}/>
                                    <div>
                                        - Объекты туризма
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#1860FF"}}/>
                                    <div>
                                        - Дом
                                    </div>
                                </div>
                                <div className={classes.color}>
                                    <div className={classes.circle} style={{background: "#8AD554"}}/>
                                    <div>
                                        - Парк
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        <Divider />

                        <Form.Group className={classes.container}>
                            {filteredHexagons.length <= 0 ? (
                             <div>Выберите город для загрузки рейтинга</div>
                            ) : null}
                            <BarChart
                                 width={diagramWidth}
                                 height={diagramHeight}
                                 data={filteredHexagons}
                                 margin={{
                                     top: 5,
                                     right: 30,
                                     left: 20,
                                     bottom: 5,
                                 }}>
                                 <XAxis
                                     dataKey="polygon_id"
                                     tick={{ fontSize: 10 }} />
                                 <Tooltip 
                                     content={<CustomTooltip />}/>
                                 <Legend />
                                 <Bar
                                     dataKey="rating"
                                     name="Рейтинг полигонов"
                                     fill="#1c666e"/>
                             </BarChart>
                        </Form.Group>
                    </Drawer>
            }
        </div>
    );
};

export {Sidebar};