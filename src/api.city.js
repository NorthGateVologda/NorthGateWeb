import { instance } from "./api.config.js";

export const getCity = (city) => {
    return instance.get("/api/get_residential_hexagons/", {city});
}
