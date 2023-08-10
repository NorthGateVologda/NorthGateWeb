import {TableColumn} from "react-data-table-component";

export interface DataRow {
    polygon_id: number;
    recommendation: number;
    nmb_of_parks: number;
    population: number;
    rating: number;
    nmb_of_residential_bld: number;
    nmb_of_trnsp_inf_bld: number;
    nmb_of_soc_infr_bld: number;
    nmb_of_business_bld: number;
    nmb_of_tourism_bld: number;
    max_rating: number;
    max_population: number;
}

export const columns: TableColumn<DataRow>[] = [
    {
        name: "ID",
        selector: row => row.polygon_id,
        sortable: true,
        width: '80px',
        reorder: true
    },
    {
        name: "Рекомендовано размещение парка",
        selector: (row) => row.recommendation,
        sortable: true,
        width: '250px',
        reorder: true,
        conditionalCellStyles: [
            {
                when: row => row.recommendation === 1,
                style: () => ({
                    color: "rgb(84, 165, 32)"
                })
            },
            {
                when: row => row.recommendation === 0,
                style: () => ({
                    color: "rgb(227, 26, 28)"
                })
            }
        ]
    },
    {
        name: "Количество парков",
        selector: (row) => row.nmb_of_parks,
        sortable: true,
        width: '158px',
        reorder: true
    },
    {
        name: "Количество жителей",
        selector: (row) => row.population,
        sortable: true,
        width: '166px',
        reorder: true,
        conditionalCellStyles: [
            {
                when: row => row.population <= 500,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(255, 237, 160) 0%, rgb(255, 237, 160) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 500,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(254, 217, 118) 0%, rgb(254, 217, 118) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 1000,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(254, 178, 76) 0%, rgb(254, 178, 76) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 2000,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(253, 141, 60) 0%, rgb(253, 141, 60) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 3000,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(252, 78, 42) 0%, rgb(252, 78, 42) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 4000,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(227, 26, 28) 0%, rgb(227, 26, 28) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 5000,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(189, 0, 38) 0%, rgb(189, 0, 38) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            },
            {
                when: row => row.population > 8000,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(128, 0, 38) 0%, rgb(128, 0, 38) ${(row.population / row.max_population) * 100}%, transparent ${(row.population / row.max_population) * 100}%, transparent 100%)`
                })
            }
        ],
        style: {
            margin: "0 5px 0 0"
        }
    },
    {
        name: "Рейтинг комфортности полигона",
        selector: (row) => row.rating,
        sortable: true,
        width: '235px',
        reorder: true,
        conditionalCellStyles: [
            {
                when: row => true,
                style: (row: DataRow) => ({
                    background: `linear-gradient(to right, transparent 0%, transparent 0%, rgb(84, 165, 32) 0%, rgb(84, 165, 32) ${(row.rating / row.max_rating) * 100}%, transparent ${(row.rating / row.max_rating) * 100}%, transparent 100%)`
                })
            }
        ]
    },
    {
        name: "Количество жилых домов",
        selector: (row) => row.nmb_of_residential_bld,
        sortable: true,
        width: '197px',
        reorder: true
    },
    {
        name: "Количество обьектов транспортной инф.",
        selector: (row) => row.nmb_of_trnsp_inf_bld,
        sortable: true,
        width: '280px',
        reorder: true
    },
    {
        name: "Количество объектов социальной инф.",
        selector: (row) => row.nmb_of_soc_infr_bld,
        sortable: true,
        width: '280px',
        reorder: true
    },
    {
        name: "Количество объекты бизнеса сферы услуг",
        selector: (row) => row.nmb_of_business_bld,
        sortable: true,
        width: '288px',
        reorder: true
    },
    {
        name: "Количество объектов туризма",
        selector: (row) => row.nmb_of_tourism_bld,
        sortable: true,
        width: '221px',
        reorder: true
    }
];

export const customStyles = {
    subHeader: {
        style: {
            border: 'none',
            wordWrap: 'break-word',
            whiteSpace: "unset"
        },
    },
    headCells: {
        style: {
            color: '#202124',
            fontSize: '12px',
            display: 'block'
        },
    },
    rows: {
        highlightOnHoverStyle: {
            backgroundColor: 'rgb(230, 244, 244)',
            borderBottomColor: '#FFFFFF',
            borderRadius: '25px',
            outline: '1px solid #FFFFFF',
            whiteSpace: "unset",
            minHeight: '32px'
        },
        style: {
            minHeight: '32px'
        }
    },
    pagination: {
        style: {
            border: 'none',
        },
    },
};