import axiosClient from "./axiosClient";

// api/productApi.js
const userApi = {
    getAll: () => {
        const url = 'https://ecom.bnidx.net/api/auth/get_tokens?username=ninh&password=123@Enmasys';
        return axiosClient.get(url);
    },
    get: (id) => {
        const url = '/res.partner/${name}';
        return axiosClient.get(url);

    },
}
export default userApi;