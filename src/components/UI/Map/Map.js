import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CircleArea from "../CircleArea/CircleArea";
import classes from "./Map.module.css";

const Map = ({center, position, radius, setPosition}) => {
  return (
    <div className={classes.mapContainer}>
      {
        <MapContainer
            className={classes.map}
            center={center}
            zoom={13}
            scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

          />
          <CircleArea
            position={position}
            setPosition={setPosition}
            radius={radius}
          />
        </MapContainer>
      }
    </div>
  )
}

export default Map
