import {Circle, useMapEvents} from "react-leaflet";
import {LatLng} from "leaflet";
import {Dispatch, useRef} from "react";

type Props = {
    position: LatLng,
    setPosition: Dispatch<LatLng>,
    radius: number
};

const CircleArea = ({position, setPosition, radius}: Props) => {
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
};

export default CircleArea;