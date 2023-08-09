"use client"
import React from 'react';
import {useMap} from "react-leaflet";
import {Props} from './type';
import {LatLngExpression} from "leaflet";
import dynamic from 'next/dynamic';

const GeoJSON = dynamic(() => import("react-leaflet").then((module) => ({default: module.GeoJSON})), {loading: () => <p>loading...</p>, ssr: false});
const PopulationGrid = ({data, hexagonFilterId, setHexagonFilterId}: Props) => {
    const hexagonId: number = parseInt(hexagonFilterId);

    const getColor = (d: number, id: number) => {
        if (id === hexagonId) {
            return '#0d6efd';
        } else {
            return d > 8000 ? '#800026' :
                d > 5000 ? '#BD0026' :
                    d > 4000 ? '#E31A1C' :
                        d > 3000 ? '#FC4E2A' :
                            d > 2000 ? '#FD8D3C' :
                                d > 1000 ? '#FEB24C' :
                                    d > 500 ? '#FED976' :
                                        '#FFEDA0';
        }
    }

    const map = useMap();
    if (hexagonId !== -1) {
        //@ts-ignore
        const targetPolygon = data.features.find((feature) => feature.properties.id === hexagonId);

        if (targetPolygon) {
            const x = targetPolygon.properties.x;
            const y = targetPolygon.properties.y;
            map.flyTo([y, x], 13);
        }
    }

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
                        fillColor: getColor(feature?.properties?.population, feature?.properties?.id)
                    }
                }}
                onEachFeature={(feature, layer) => {
                    // @ts-ignore
                    const id: number = feature?.properties?.id;
                    const pop: number = feature?.properties?.population;

                    layer.bindTooltip(`ID ${id} (Население ${pop})`).openTooltip([feature?.properties.x, feature?.properties.y] as LatLngExpression);
                    layer.on('click', () => {
                        setHexagonFilterId(feature?.properties?.id.toString());
                    });
                }}
            />
        </>
    );

};

export {PopulationGrid};