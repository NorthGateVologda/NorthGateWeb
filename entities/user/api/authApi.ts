import {instance} from "@/app/axios.config";

const isAuthorize = false;

export const login = async (username : String, password : String): Promise<object> => {
    const data = await instance.post("/api/user/login/", {username, password, isAuthorize});
    console.debug(`status: ${data.status} ${data.statusText}`);
    localStorage.setItem("token", data.data.access);
    localStorage.setItem("refresh", data.data.refresh);
    return data;
}

export const refreshToken = async ():Promise<object> => {
    const data = await instance.post("/api/user/token/refresh/", {refresh: localStorage.getItem("refresh"), isAuthorize: false});
    localStorage.setItem("token", data.data.access);
    localStorage.setItem("refresh", data.data.refresh);
    return data;
}

export const logout = async () => {
    await instance.post("/api/user/login/");
}

export const registration = async (username : String, password : String): Promise<object> => {
    const data = await instance.post("/api/user/registration/", {username, password, isAuthorize});
    console.debug(`status: ${data.status} ${data.statusText}`);
    localStorage.setItem("token", data.data.data.token.access);
    localStorage.setItem("refresh", data.data.refresh);
    return data;
}