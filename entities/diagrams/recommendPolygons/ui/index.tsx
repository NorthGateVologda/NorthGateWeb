import React from 'react';
import classes from './index.module.css';
import {DataRow} from '@/widgets/table/columns';

const RecommendPolygons = ({
    hexagons
}: {
    hexagons: DataRow[]
}) => {
    const recommendPolygons: number = hexagons.filter((item: {recommendation: number}) => item.recommendation === 1).length

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                Количество парков которое необходимо разместить
            </div>
            <div className={classes.population}>
                {recommendPolygons}
            </div>
        </div>
    );
}

export {RecommendPolygons};