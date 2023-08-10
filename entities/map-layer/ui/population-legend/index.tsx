import React from 'react';
import {Form} from 'react-bootstrap';
import classes from './index.module.css';

const PopulationLegend = () => {
    return (
        <Form.Group className={classes.container}>
            <Form.Label
                className={classes.header}
            >
                Население в полигоне
            </Form.Label>

            <div className={classes.legend}>
                <div className={classes.colorLine}/>
                <div className={classes.legendCaption}>
                    <div>0</div>
                    <div>8000</div>
                </div>
            </div>
        </Form.Group>
    );
};

export {PopulationLegend};