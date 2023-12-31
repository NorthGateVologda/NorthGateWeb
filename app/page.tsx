"use client"
import {Authentication, InteractiveMap, Sidebar} from "@/widgets";
import {Toaster} from "react-hot-toast";
import {useEffect, useMemo, useState} from "react";
import classes from './page.module.css';
import {Table} from "@/widgets/table";
import {getHexagons} from "@/entities/hexagons/api/hexagonsApi";
import {DataRow} from "@/widgets/table/columns";
import {GeoJsonObject} from "geojson";
import {getPopulationGrid} from "@/entities/map-layer/api/geoJsonApi";

export default function Home() {
    const [hexagonFilterId, setHexagonFilterId] = useState<string>("-1");
    const [city, setCity] = useState<string>('Default');
    const [houses, setHouses] = useState<boolean>(false);
    const [hexagons, setHexagons] = useState<DataRow[]>([]);
    const [showReg, setShowReg] = useState<boolean>(/*checkToken()*/typeof window !== "undefined" ? !localStorage.getItem("token") : true);
    const [showLog, setShowLog] = useState<boolean>(false);
    const [population, setPopulation] = useState<GeoJsonObject>({} as GeoJsonObject);
    const [layerType, setLayerType] = useState<boolean>(false);

    console.log(hexagons)

    const cashedHexagons = useMemo(() => city !== 'Default' ? hexagons : [], [hexagons, city]);
    const cashedPopulation = useMemo(() => population, [population]);
    const [height, setHeight] = useState(100);
    const [divHeight, setDivHeight] = useState(0);
    const [openTable, setOpenTable] = useState<boolean>(false);

    useEffect(() => {
        if (city === 'Default') {
            return;
        }

        getPopulationGrid(city)
            .then(res => {
                setPopulation(res);
            })
    }, [city]);

    useEffect(() => {
        if (localStorage.getItem("token") && !showLog && !showReg) {
            getHexagons()
                .then(res => {
                    setHexagons(res);
                });
        }
    }, [showLog, showReg]);

    return (
        <main className="mainContainer">
            <Authentication
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
                setHexagonFilterId={setHexagonFilterId}
                hexagonFilterId={hexagonFilterId}
                divHeight={divHeight}
                openTable={openTable}
            />

            <div className={classes.mainVertical}>
                <InteractiveMap
                    city={city}
                    population={population}
                    layerType={layerType}
                    showHouses={houses}
                    hexagons={hexagons}
                    hexagonFilterId={hexagonFilterId}
                    setHexagonFilterId={setHexagonFilterId}
                />
                <Table
                    city={city}
                    hexagons={cashedHexagons}
                    hexagonFilterId={hexagonFilterId}
                    setHexagonFilterId={setHexagonFilterId}
                    setDivHeight={setDivHeight}
                    openTable={openTable}
                    setOpenTable={setOpenTable}
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
