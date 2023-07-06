import { Circle, useMapEvents } from "react-leaflet";
import { useRef } from "react";

function CircleArea({position, setPosition, radius}) {
    const circleRef = useRef(null);

    useMapEvents({
        click(e) {
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

export default CircleArea;