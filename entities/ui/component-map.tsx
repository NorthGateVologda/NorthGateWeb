import {MapContainer, TileLayer} from "react-leaflet";
import React from "react";

type Props = {
    children: React.ReactNode
};

const ComponentMap = ({children} : Props) => {
    return (
        <MapContainer>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    );
};

export default ComponentMap;