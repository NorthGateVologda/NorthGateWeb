"use client"
import { DataRow } from '@/widgets/table/columns';
import { GeoJsonObject } from 'geojson';
import { LatLngExpression } from 'leaflet';
import dynamic from 'next/dynamic';
import React from 'react';

const GeoJSON = dynamic(() => import("react-leaflet").then((module) => ({default: module.GeoJSON})), {loading: () => <p>loading...</p>, ssr: false});

const ParkGrid = ({data, filter}: {data: GeoJsonObject, filter: DataRow[]}) => {
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
                        fillColor: 'green'
                    }
                }}
                filter={(feature) => {
                    return !filter.find((value) => {
                        return value.polygon_id === feature.properties.id && value.recommendation === 0;
                    });
                }}
            />
        </>
    );
};

export {ParkGrid};