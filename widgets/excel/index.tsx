import React from "react";
import * as XLSX from 'xlsx';
import {Button} from "react-bootstrap";

const ExportExcelButton = ({data, worksheetName}: { data: any, worksheetName: string }) => {
    const handleExportClick = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);
        XLSX.writeFile(workbook, "NorthGateVologda.xlsx");
    };

    return (
        <Button
            variant="primary"
            onClick={handleExportClick}
            disabled={data.length <= 0}
        >
            Выгрузить в Excel
        </Button>
    );
}

export {ExportExcelButton}