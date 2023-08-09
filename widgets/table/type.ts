import React from "react";
import {DataRow} from "@/widgets/table/columns";

type Props = {
    city: string | undefined,
    hexagons: DataRow[],
    hexagonFilterId: string,
    setHexagonFilterId: React.Dispatch<React.SetStateAction<string>>,
    setDivHeight: React.Dispatch<React.SetStateAction<number>>
};

export type {Props};