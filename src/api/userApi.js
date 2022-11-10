import axios from "axios";

// api/productApi.js
const userApi = {
    login: (params) => {
        const url = `https://ecom.bnidx.net/web/session/authenticate`;
        // const url = `https://ecom.bnidx.net/api/res.users/8`;
        return axios.post(url, params).then( data => {
            return data;
        });
    },
    get: (id) => {
        const url = `/res.partner/${id}`;
        return axios.get(url);
    },
}
export default userApi;