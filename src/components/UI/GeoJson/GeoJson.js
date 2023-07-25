import React from 'react';
import { GeoJSON } from 'react-leaflet';

const GeoJson = ({data}) => {
    const getColor = (d) => {
        return d > 1000 ? '#800026' :
			d > 500  ? '#BD0026' :
			d > 200  ? '#E31A1C' :
			d > 100  ? '#FC4E2A' :
			d > 50   ? '#FD8D3C' :
			d > 20   ? '#FEB24C' :
			d > 10   ? '#FED976' :
						'#FFEDA0';
    }

    function style(feature) {
        return {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            fillColor: getColor(feature.properties.population)
        };
    }

    return (
        <GeoJSON 
            data={data}
            style={style}
        />
    );
}

export default GeoJson;