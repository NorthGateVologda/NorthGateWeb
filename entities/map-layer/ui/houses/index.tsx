import React from 'react';
import {GeoJSON} from "react-leaflet";
import {GeoJsonObject} from "geojson";

const Houses = ({data}: {data: GeoJsonObject}) => {
    const getColor = (d: string) => {
        return d === 'Объекты социальной инфраструктуры' ? '#FF3D64' :
            d === 'Объект транспортной инфраструктуры'  ? '#4DA2F1' :
                d === 'Объекты бизнеса'  ? '#FF8918' :
                    d === 'Объекты туризма'  ? '#18FFC1' :
                        d === 'Парк'  ? '#8AD554' :
                                '#FFFFFF';
    }

    return (
        <>
            <GeoJSON
                data={data}
                style={(feature) => {
                    return {
                        weight: 1,
                        opacity: 0,
                        color: 'white',
                        dashArray: '3',
                        fillOpacity: 0.4,
                        fillColor: getColor(feature?.properties?.type)}
                }}
            />
        </>
    );
};

export {Houses};