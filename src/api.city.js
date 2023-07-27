import { instance } from "./api.config.js";

export const getCity = async (city) => {
    const {data} = await instance.get("/api/get_residential_hexagons/", {city});
    console.log(data);
    return data;
}
