import { instance } from "./api.config.js";

export const login = (name, password) => {
    return instance.post("/api/user/login/", {name, password});
}
    
export const refreshToken = () => {
    return instance.get("/api/user/token/refresh/");
}
    
export const logout = () => {
    return instance.post("/api/user/login/");
}

export const registration = (name, password) => {
    return instance.post("/api/user/registration/", {name, password});
}