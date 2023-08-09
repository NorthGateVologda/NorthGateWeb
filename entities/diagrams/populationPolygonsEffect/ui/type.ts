import React from "react";
import {DataRow} from "@/widgets/table/columns";

type Props = {
    hexagons:  DataRow[]
    hexagonFilterId: string,
    setHexagonFilterId: React.Dispatch<React.SetStateAction<string>>
};

export type {Props};