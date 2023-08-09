import {GeoJsonObject} from "geojson";

type Props = {data: GeoJsonObject, hexagonFilterId: number, setHexagonFilterId: React.Dispatch<React.SetStateAction<number>>};

export type {Props};