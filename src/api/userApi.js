import axiosClient from "./axiosClient";

// api/productApi.js
const userApi = {
    login: (params) => {
        const url = `/web/session/authenticate`;
        return axiosClient.post(url, params,{ withCredentials: false });
    },
    get: (id) => {
        const url = `/res.partner/${id}`;
        return axiosClient.get(url);
    },
}
export default userApi;