"use client"
import {Authentication, InteractiveMap, Sidebar} from "@/widgets";
import {Toaster} from "react-hot-toast";
import {useEffect, useMemo, useState} from "react";
import classes from './page.module.css';
import {Table} from "@/widgets/table";
import { getHexagons } from "@/entities/hexagons/api/hexagonsApi";
import { DataRow } from "@/widgets/table/columns";
import {LogOut} from '@/entities/user';

export default function Home() {
    const [city, setCity] = useState<string>('Default');
    const [houses, setHouses] = useState<boolean>(false);
    const [hexagons, setHexagons] = useState<DataRow[]>([]);
    const [successfulAuth, setSuccessfulAuth] = useState<boolean>(false);
    const cashedHexagons = useMemo(() => hexagons, [hexagons]);

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
                setSuccessfulAuth={setSuccessfulAuth}/>

            <Sidebar
                city={city}
                hexagons={cashedHexagons}
                houses={houses}
                setCity={setCity}
                setHouses={setHouses}
            />

            <LogOut />

            <div className={classes.mainVertical}>
                <InteractiveMap
                    city={city}
                    showHouses={houses}
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
