import React from 'react';
import {GeoJSON} from "react-leaflet";
import {GeoJsonObject} from "geojson";
import L, {Layer} from "leaflet";

const Houses = ({data}: {data: GeoJsonObject}) => {
    const getColor = (d: string) => {
        return d === 'Объекты социальной инфраструктуры' ? '#FF3D64' :
            d === 'Объект транспортной инфраструктуры'  ? '#4DA2F1' :
                d === 'Объекты бизнеса'  ? '#8AD554' :
                    d === 'Объекты туризма'  ? '#FF3D64' :
                        d === 'Дом'  ? '#FF3D64' :
                            d === 'Парк'  ? '#8AD554' :
                                    '#FFFFFF';
    }

    return (
        <>
            <GeoJSON
                data={data}
                pointToLayer={(feature, latlng): Layer => {
                    return L.circleMarker(latlng, {
                        radius: 10,
                        weight: 0.5,
                        opacity: 1,
                        color: 'white',
                        dashArray: '3',
                        fillOpacity: 0.3,
                        fillColor: getColor(feature?.properties?.type)
                    })
                }}
            />
        </>
    );
};

export {Houses};