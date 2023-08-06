"use client"
import {Authentication, InteractiveMap, Sidebar} from "@/widgets";
import {Toaster} from "react-hot-toast";
import {useState} from "react";
import classes from './page.module.css';
import {Table} from "@/widgets/table";

export default function Home() {
    const [city, setCity] = useState<string>('');
    const [houses, setHouses] = useState<boolean>(false);

    return (
        <main>
            <Authentication />


                <Sidebar
                    city={city}
                    setCity={setCity}
                    setHouses={setHouses}
                />

                <InteractiveMap
                    city={city}
                    showHouses={houses}
                />


            <Table
                city={city}
            />

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
