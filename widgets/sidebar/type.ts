import React from "react";
import {DataRow} from "@/widgets/table/columns";

type Props = {
    city: string | undefined,
    houses: boolean,
    hexagons: DataRow[],
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setHouses: React.Dispatch<React.SetStateAction<boolean>>,
    setShowLog: React.Dispatch<React.SetStateAction<boolean>>,
    layerType: boolean,
    setLayerType: React.Dispatch<React.SetStateAction<boolean>>,
    setHexagonFilterId: React.Dispatch<React.SetStateAction<string>>,
    divHeight: number
};

export type {Props};