import { instance } from "./api.config.js";

export const login = (name, password) => {
    const {data} = instance.post("/api/user/login/", {name, password});
    localStorage.setItem("token", data.access);
    return data;
}
    
export const refreshToken = () => {
    const {data} = instance.get("/api/user/token/refresh/");
    localStorage.setItem("token", data.access);
    return data;
}
    
export const logout = () => {
    instance.post("/api/user/login/");
}

export const registration = (name, password) => {
    const {data} = instance.post("/api/user/registration/", {name, password});
    console.log(data);
    localStorage.setItem("token", data.access);
    return data;
}