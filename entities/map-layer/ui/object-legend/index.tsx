import React from 'react';
import {Form} from 'react-bootstrap';
import classes from './index.module.css';

const ObjectLegend = () => {
    return (
        <Form.Group className={classes.container}>
            <Form.Label
                className={classes.header}
            >
                Объекты
            </Form.Label>

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
                    <div className={classes.circle} style={{background: "#8AD554"}}/>
                    <div>
                        - Парк
                    </div>
                </div>
            </div>
        </Form.Group>
    );
};

export {ObjectLegend};