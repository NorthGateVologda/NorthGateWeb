"use client"
import {GeoJSON, MapContainer, TileLayer, ZoomControl} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import classes from "./index.module.css";
import {PopulationGrid} from "@/entities/map-layer/insex";
import {getHouses, getPopulationGrid} from "@/entities/map-layer/api/geoJsonApi";
import {GeoJsonObject} from "geojson";
import React, {useEffect, useState} from "react";
import {Point} from "leaflet";
import {Houses} from "@/entities/map-layer/ui/houses/insex";


const InteractiveMap = ({city, showHouses}: {city: string, showHouses: boolean}) => {
    const [population, setPopulation]: [population: GeoJsonObject, setPopulation: React.Dispatch<React.SetStateAction<GeoJsonObject>>] = useState({} as GeoJsonObject);
    const [houses, setHouses]: [population: GeoJsonObject, setPopulation: React.Dispatch<React.SetStateAction<GeoJsonObject>>] = useState({} as GeoJsonObject);

    useEffect(() => {
        if (city === '' || city === undefined)
        {
            return;
        }

        getPopulationGrid(city)
            .then(res => {
                setPopulation(res);
            })
    }, [city]);

    useEffect(() => {
        if (city === '' || city === undefined)
        {
            return;
        }

        getHouses(city)
            .then(res => {
                setHouses(res);
            })
    }, [showHouses]);

    return (
        <div className={classes.mapContainer}>
            <MapContainer
                className={classes.map}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
                center={{ lat: 64.5430543214365, lng: 40.53628921508789}}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; NorthGate Vologda'
                />

                <ZoomControl
                    position='topright'
                />

                {
                    population?.type ?
                        <PopulationGrid
                            data={population}
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