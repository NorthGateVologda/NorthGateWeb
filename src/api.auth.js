import { instance } from "./api.config.js";

export const login = async (username, password) => {
    const data = await instance.post("/api/user/login/", {username, password});
    console.log(`status: `);
    localStorage.setItem("token", data.data.access);
    return data;
}
    
export const refreshToken = async () => {
    const {data: {data}} = await instance.get("/api/user/token/refresh/");
    localStorage.setItem("token", data.token.access);
    return data;
}
    
export const logout = async () => {
    await instance.post("/api/user/login/");
}

export const registration = async (username, password) => {
    const {data: {data}} = await instance.post("/api/user/registration/", {username, password});
    console.log(data.token.access);
    localStorage.setItem("token", data.token.access);
    return data.token.access;
}