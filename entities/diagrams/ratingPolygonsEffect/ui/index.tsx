import React from 'react';
import {Bar, BarChart, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import {DataRow} from '@/widgets/table/columns';
import {CustomTooltip} from '@/entities/sidebar';
import classes from './index.module.css';
import {Props} from "@/entities/diagrams/ratingPolygonsEffect/ui/type";

const RatingPolygonsEffect = ({
                                  hexagons,
                                  setHexagonFilterId
                              }: Props) => {
    const filteredHexagons: DataRow[] = hexagons.filter((item: {
        recommendation: number,
        rating: number
    }) => item.recommendation === 1 && item.rating !== 0);
    const diagramWidth: number = 300;
    const diagramHeight: number = 350;
    return (
        <div className={classes.container}>
            <span className={classes.title}>
                По рейтингу полигона
            </span>
            <BarChart
                width={diagramWidth}
                height={diagramHeight}
                data={filteredHexagons}
                layout="vertical"
                onClick={(e) => {
                    // @ts-ignore
                    setHexagonFilterId(e?.activeLabel?.toString())
                }}>
                <XAxis
                    type="number"
                    tick={{fontSize: 10}}/>
                <YAxis
                    dataKey="polygon_id"
                    type="category"
                    tick={{fontSize: 10}}/>
                <Tooltip
                    content={<CustomTooltip name="Рейтинг"/>}/>
                <Legend/>
                <Bar
                    dataKey="rating"
                    legendType="none"
                    fill="#ffd308"
                    barSize={5}/>
            </BarChart>
        </div>
    );
}

export {RatingPolygonsEffect};