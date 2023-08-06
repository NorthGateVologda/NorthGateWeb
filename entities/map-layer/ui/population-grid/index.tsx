import React from 'react';
import {GeoJSON,} from "react-leaflet";
import {Props} from './type';
import {LatLngExpression} from "leaflet";
import classes from './index.module.css';


const PopulationGrid = ({data}: Props) => {
    const getColor = (d: number) => {
        return d > 8000 ? '#800026' :
            d > 5000  ? '#BD0026' :
                d > 4000  ? '#E31A1C' :
                    d > 3000  ? '#FC4E2A' :
                        d > 2000   ? '#FD8D3C' :
                            d > 1000   ? '#FEB24C' :
                                d > 500   ? '#FED976' :
                                    '#FFEDA0';
    }

    const calculateHexagonCenter = (coordinates: number[]) => {
        // @ts-ignore
        const totalLng = coordinates.reduce((acc, coord) => acc + coord[0], 0);
        // @ts-ignore
        const totalLat = coordinates.reduce((acc, coord) => acc + coord[1], 0);
        const centerLng = totalLng / coordinates.length;
        const centerLat = totalLat / coordinates.length;
        return [centerLat, centerLng];
    };

    return (
        <>
            <GeoJSON

                data={data}
                style={(feature) => {
                    return {
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        dashArray: '3',
                        fillOpacity: 0.5,
                        fillColor: getColor(feature?.properties?.population)}
                }}
                onEachFeature={(feature, layer) => {
                    // @ts-ignore
                    const center = calculateHexagonCenter(feature.geometry.coordinates[0]);
                    const pop: number = feature?.properties?.population;
                    layer.bindTooltip(`Количество человек в полигоне: ${pop}`).openTooltip(center as LatLngExpression);
                }}
            />
        </>
    );
};

export {PopulationGrid};