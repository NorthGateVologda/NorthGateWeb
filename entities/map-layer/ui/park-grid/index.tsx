import {LatLngExpression} from 'leaflet';
import React from 'react';
import {useMap} from "react-leaflet";
import {Props} from "@/entities/map-layer/ui/park-grid/type";
import {DataRow} from "@/widgets/table/columns";
import dynamic from "next/dynamic";

const GeoJSON = dynamic(() => import("react-leaflet").then((module) => ({default: module.GeoJSON})), {loading: () => <p>loading...</p>, ssr: false});

const ParkGrid = ({data, filter, hexagonFilterId, setHexagonFilterId}: Props) => {
    const hexagonId: number = parseInt(hexagonFilterId);

    const getColor = (recommendation: number, id: number) => {
        if (id === hexagonId) {
            return '#0d6efd';
        } else {
            const foundFilter: DataRow | undefined = filter.find((item) => item.polygon_id === id);

            if (foundFilter?.recommendation === 1) {
                return 'green';
            } else {
                return '#a5c8bc';
            }
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
                        fillColor: getColor(feature?.properties?.recommendation, feature?.properties?.id)
                    }
                }}
                onEachFeature={(feature, layer) => {
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

export {ParkGrid};