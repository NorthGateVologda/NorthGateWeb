import {GeoJsonObject} from "geojson";
import {instance} from "@/app/axios.config";

export async function getPopulationGrid(city: String) : Promise<GeoJsonObject> {
    const data = await instance.get('/api/get_residential_hexagons/', {data: city});
    return data.data;
}

export async function getHouses(city: String) : Promise<GeoJsonObject> {
    const data = await instance.get('/api/get_facilities/', {data: city});
    return data.data;
}