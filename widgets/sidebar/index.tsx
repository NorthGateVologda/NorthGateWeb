import React from 'react';
import classes from './index.module.css';
import {Form} from "react-bootstrap";

const Sidebar = ({city, setCity, setHouses}: {city: string, setCity: React.Dispatch<React.SetStateAction<string>>, setHouses: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div className={classes.sidebar}>
            <Form.Group className={classes.conrtainer}>
                <Form.Label>Город</Form.Label>
                <Form.Select
                    defaultValue="Default"
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

            <Form.Group className={classes.conrtainer}>
                <Form.Label>Объекты</Form.Label>
                <Form.Check
                    type="switch"

                    label="Отобразить объекты"
                    disabled={city === '' || city === undefined}
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
                        <div className={classes.circle} style={{background: "#8AD554"}}/>
                        <div>
                            - Объекты бизнеса
                        </div>
                    </div>
                    <div className={classes.color}>
                        <div className={classes.circle} style={{background: "#FF3D64"}}/>
                        <div>
                            - Объекты туризма
                        </div>
                    </div>
                    <div className={classes.color}>
                        <div className={classes.circle} style={{background: "#FF3D64"}}/>
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
        </div>
    );
};

export {Sidebar};