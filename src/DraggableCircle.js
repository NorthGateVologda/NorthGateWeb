import {Circle, Marker, Popup, useMapEvents} from "react-leaflet";
import {useCallback, useMemo, useRef, useState} from "react";

function DraggableCircle({position, setPosition, radius}) {

    const circleRef = useRef(null);

    useMapEvents({
        mouseup(e) {
            const circle = circleRef.current;
            if (circle != null) {
                setPosition(e.latlng);
            }
        },
    });

    return (
        <Circle
            center={position}
            radius={radius}
            ref={circleRef}
        />
    );
}

export default DraggableCircle;