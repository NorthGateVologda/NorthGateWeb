import React from 'react';
import { DataRow } from '@/widgets/table/columns';
import classes from './index.module.css'

const Population = ({
    hexagons
}: {
    hexagons: DataRow[]
}) => {
    const population: number = hexagons.reduce((accumulator, currentValue) => accumulator + currentValue.population, 0);

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Численность населения всего
            </div>
            <div className={classes.population}>
                {population}
            </div>
        </div>
    );
}

export {Population};