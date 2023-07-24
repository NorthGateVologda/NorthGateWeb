"use client"
import ComponentMap from "@/entities/ui/component-map";
import CircleArea from "@/entities/ui/circle-area";
import {useState} from "react";
import {LatLng} from "leaflet";

const LayersMap = () => {
    const [position, setPosition] = useState<LatLng>(Object({
        lat: 0,
        lng: 0
    }));
    const [radius, setRadius] = useState<number>(100);

    return (
        <ComponentMap>
            <CircleArea
                position={position}
                setPosition={setPosition}
                radius={radius}/>
        </ComponentMap>
    );
};

export default LayersMap;