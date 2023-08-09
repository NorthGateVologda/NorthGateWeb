import React from 'react';
import { Form } from 'react-bootstrap';
import classes from './index.module.css';

const PopulationLegend = () => {
    return (
        <Form.Group className={classes.container}>
            <Form.Label
                className={classes.header}
            >
                Население в полигоне
            </Form.Label>

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
    );
};

export {PopulationLegend};