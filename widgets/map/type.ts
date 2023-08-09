import React from "react";
import {DataRow} from "@/widgets/table/columns";
import {GeoJsonObject} from "geojson";

type Props = {
    city: string,
    showHouses: boolean,
    population: GeoJsonObject,
    layerType: boolean,
    hexagons: DataRow[],
    hexagonFilterId: string,
    setHexagonFilterId: React.Dispatch<React.SetStateAction<string>>
};

export type {Props};