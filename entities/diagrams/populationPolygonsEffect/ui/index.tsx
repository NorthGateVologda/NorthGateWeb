import React from 'react';
import { DataRow } from '@/widgets/table/columns';
import classes from './index.module.css';
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltip} from '@/entities/sidebar';

const PopulationPolygonsEffect = ({
    hexagons
}: {
    hexagons: DataRow[]
}) => {
    const filteredHexagons: DataRow[] = hexagons.filter((item: {recommendation: number, population: number}) => item.recommendation === 1 && item.population > 0);
    const diagramWidth: number = 300;
    const diagramHeight: number = 350;

    return (
        <div className={classes.container}>
            <span className={classes.title}>
                По численности населения
            </span>
            <BarChart
                width={diagramWidth}
                height={diagramHeight}
                data={filteredHexagons}
                layout="vertical">
                <XAxis
                    type="number"
                    tick={{ fontSize: 10 }} />
                <YAxis
                    dataKey="polygon_id"
                    type="category"
                    tick={{ fontSize: 10 }} />
                <Tooltip
                    content={<CustomTooltip name="Население"/>}/>
                <Legend />
                <Bar
                    dataKey="population"
                    legendType="none"
                    fill="#fe5e62"
                    barSize={5}/>
             </BarChart>
        </div>
    );
}

export {PopulationPolygonsEffect};