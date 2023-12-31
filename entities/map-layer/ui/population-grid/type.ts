import {GeoJsonObject} from "geojson";
import React from "react";

type Props = {
    data: GeoJsonObject,
    hexagonFilterId: string,
    setHexagonFilterId: React.Dispatch<React.SetStateAction<string>>
};

export type {Props};