"use client"
import {Authentication, InteractiveMap, Sidebar} from "@/widgets";
import {Toaster} from "react-hot-toast";
import {useEffect, useMemo, useState} from "react";
import classes from './page.module.css';
import {Table} from "@/widgets/table";
import { getHexagons } from "@/entities/hexagons/api/hexagonsApi";
import { DataRow } from "@/widgets/table/columns";
import {LogOut} from '@/entities/user';
import {GeoJsonObject} from "geojson";
import { getPopulationGrid } from "@/entities/map-layer/api/geoJsonApi";

export default function Home() {
    const [city, setCity] = useState<string>('Default');
    const [houses, setHouses] = useState<boolean>(false);
    const [hexagons, setHexagons] = useState<DataRow[]>([]);
    const [successfulAuth, setSuccessfulAuth] = useState<boolean>(false);
    const [showReg, setShowReg] = useState<boolean>(!localStorage.getItem("token"));
    const [showLog, setShowLog] = useState<boolean>(false);
    const [population, setPopulation] = useState<GeoJsonObject>({} as GeoJsonObject);
    const [layerType, setLayerType] = useState<boolean>(false);

    const cashedHexagons = useMemo(() => hexagons, [hexagons]);
    const cashedPopulation = useMemo(() => population, [population]);

    useEffect(() => {
        if (city === 'Default')
        {
            return;
        }

        getPopulationGrid(city)
            .then(res => {
                setPopulation(res);
                console.log(res);
            })
    }, [city]);

    useEffect(() => {
     if (successfulAuth === true || city !== 'Default') {
         getHexagons()
             .then(res => {
                  setHexagons(res);
             });
     }
    }, [successfulAuth]);

    return (
        <main>
            <Authentication 
                setSuccessfulAuth={setSuccessfulAuth}
                showLog={showLog}
                setShowLog={setShowLog}
                showReg={showReg}
                setShowReg={setShowReg}
            />

            <Sidebar
                city={city}
                hexagons={cashedHexagons}
                houses={houses}
                setCity={setCity}
                setHouses={setHouses}
                setShowLog={setShowLog}
                setLayerType={setLayerType}
                layerType={layerType}
            />

            <div className={classes.mainVertical}>
                <InteractiveMap
                    city={city}
                    population={population}
                    layerType={layerType}
                    showHouses={houses}
                    hexagons={hexagons}
                />

                <Table
                    city={city}
                    hexagons={cashedHexagons}
                />
            </div>

            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: '',
                    duration: 3000,
                    style: {
                        background: 'white',
                        color: 'black',
                    },

                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'limegreen',
                            secondary: 'white',
                        },
                    },
                }}
            />
        </main>
    )
}
