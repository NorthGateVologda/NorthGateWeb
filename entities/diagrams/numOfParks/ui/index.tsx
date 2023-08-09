import React from 'react';
import { DataRow } from '@/widgets/table/columns';
import classes from './index.module.css';

const NumOfParks = ({
    hexagons
}: {
    hexagons: DataRow[]
}) => {
    const parks: number = hexagons.reduce((accumulator, currentValue) => accumulator + currentValue.nmb_of_parks, 0);

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Текущее количество парков
            </div>
            <div className={classes.population}>
                {parks}
            </div>
        </div>
    );
}

export {NumOfParks};