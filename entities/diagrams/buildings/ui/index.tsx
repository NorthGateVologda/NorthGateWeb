import React from 'react';
import {DataRow} from '@/widgets/table/columns';
import classes from "../../ratingPolygonsEffect/ui/index.module.css";
import {Cell, Pie, PieChart, Tooltip} from "recharts";

interface Data {
    nmb_of_business_bld: number;
    nmb_of_trnsp_inf_bld: number;
    nmb_of_tourism_bld: number;
    nmb_of_soc_infr_bld: number;
    nmb_of_parks: number;
}

const Buildings = ({
    hexagons
}: {
    hexagons: DataRow[]
}) => {
    const processedHexagons: Data = hexagons.reduce((accumulator, currentValue) => {
        return {
            nmb_of_trnsp_inf_bld: accumulator.nmb_of_trnsp_inf_bld + currentValue.nmb_of_trnsp_inf_bld,
            nmb_of_soc_infr_bld: accumulator.nmb_of_soc_infr_bld + currentValue.nmb_of_soc_infr_bld,
            nmb_of_business_bld: accumulator.nmb_of_business_bld + currentValue.nmb_of_business_bld,
            nmb_of_tourism_bld: accumulator.nmb_of_tourism_bld + currentValue.nmb_of_tourism_bld,
            nmb_of_parks: accumulator.nmb_of_parks + currentValue.nmb_of_parks
        };
    }, { nmb_of_trnsp_inf_bld: 0, nmb_of_soc_infr_bld: 0, nmb_of_business_bld: 0, nmb_of_tourism_bld: 0, nmb_of_parks: 0});
    const sumArray = [
        {name: 'Объекты транспортной инфраструктуры', value: processedHexagons.nmb_of_trnsp_inf_bld, color: '#ffc636'},
        {name: 'Объекты социальной инфраструктуры', value: processedHexagons.nmb_of_soc_infr_bld, color: '#ff3d64'},
        {name: 'Объекты бизнеса', value: processedHexagons.nmb_of_business_bld, color: '#be2443'},
        {name: 'Объекты туризма', value: processedHexagons.nmb_of_tourism_bld, color: '#8ad554'},
        {name: 'Парки', value: processedHexagons.nmb_of_parks, color: '#1f68a9'}
    ]
    const diagramWidth: number = 300;
    const diagramHeight: number = 350;

    return (
       <div className={classes.container}>
            <span className={classes.title}>
                Разделение обьектов по типам
            </span>
            <PieChart
                width={diagramWidth}
                height={diagramHeight}>
                <Pie
                    dataKey="value"
                    data={sumArray}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    minAngle={30}
                    label
                >
                {sumArray.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
       </div>
    );
}

export {Buildings};