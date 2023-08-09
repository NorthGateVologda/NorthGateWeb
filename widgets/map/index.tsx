"use client"
import {MapContainer, TileLayer, ZoomControl} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import classes from "./index.module.css";
import {ObjectLegend, ParkGrid, PopulationGrid, PopulationLegend} from "@/entities/map-layer";
import {getHouses} from "@/entities/map-layer/api/geoJsonApi";
import {GeoJsonObject} from "geojson";
import React, {useEffect, useState} from "react";
import {Houses} from "@/entities/map-layer/ui/houses";
import {Props} from "@/widgets/map/type";

const InteractiveMap = ({
                            city,
                            showHouses,
                            population,
                            layerType,
                            hexagons,
                            hexagonFilterId,
                            setHexagonFilterId,
                        }: Props) => {
    const [houses, setHouses]: [population: GeoJsonObject, setPopulation: React.Dispatch<React.SetStateAction<GeoJsonObject>>] = useState({} as GeoJsonObject);

    useEffect(() => {
        console.log(hexagons);
    }, [hexagons]);

    useEffect(() => {
        if (city === 'Default') {
            return;
        }

        getHouses(city)
            .then(res => {
                setHouses(res);
            })
    }, [city, showHouses]);

    return (
        <div className={classes.mapContainer}>
            <MapContainer
                className={classes.map}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
                center={{lat: 64.5430543214365, lng: 40.53628921508789}}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; NorthGate Vologda'
                />

                <ZoomControl
                    position='topright'
                />

                <div className={classes.legends}>
                    <PopulationLegend/>
                    <ObjectLegend/>
                </div>

                {
                    population?.type && !layerType ?
                        <PopulationGrid
                            data={population}
                            hexagonFilterId={hexagonFilterId}
                            setHexagonFilterId={setHexagonFilterId}
                        />
                        : <div/>
                }

                {
                    population?.type && layerType ?
                        <ParkGrid
                            data={population}
                            filter={hexagons}
                            hexagonFilterId={hexagonFilterId}
                            setHexagonFilterId={setHexagonFilterId}
                        />
                        : <div/>
                }

                {
                    houses?.type && showHouses ?
                        <Houses
                            data={houses}
                        />
                        : <div/>
                }

            </MapContainer>
        </div>
    );
};

export {InteractiveMap};