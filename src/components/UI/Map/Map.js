import React from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import GeoJson from '../GeoJson/GeoJson';
import classes from "./Map.module.css";

const Map = ({center, data}) => {
  return (
    <div className={classes.mapContainer}>
      {
        <MapContainer
            className={classes.map}
            center={center}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ZoomControl position="bottomleft"/>

          <GeoJson data={data} />

        </MapContainer>
      }
    </div>
  )
}

export default Map
