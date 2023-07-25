import { instance } from "./api.config.js";

export const login = (name, password) => {
    const res = instance.post("/api/user/login/", {name, password});
    localStorage.setItem("token", res.data.access);
    return res;
}
    
export const refreshToken = () => {
    const res = instance.get("/api/user/token/refresh/");
    localStorage.setItem("token", res.data.access);
    return res;
}
    
export const logout = () => {
    instance.post("/api/user/login/");
}

export const registration = (name, password) => {
    const res = instance.post("/api/user/registration/", {name, password});
    localStorage.setItem("token", res.data.access);
    return res;
}