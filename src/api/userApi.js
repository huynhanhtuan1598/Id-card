import axios from "axios";

const base_url = "https://ecom.bnidx.net";

// api/productApi.js
const userApi = {
  get_token: (username, password) => {
    const url = `${base_url}/api/auth/get_tokens?username=${username}&password=${password}`;
    return axios.get(url).then((data) => {
      return data;
    });
  },
  login: (params) => {
    const url = `${base_url}/web/session/authenticate`;
    // const url = `https://ecom.bnidx.net/api/res.users/8`;
    return axios.post(url, params).then((data) => {
      return data;
    });
  },
  get_info_user_by_id: (id, token) => {
    const url = `${base_url}/api/res.users/${id}`;
    return axios
      .get(url, {
        headers: {
          "Access-Token": token,
        },
      })
      .then((data) => {
        return data;
      });
  },
};
export default userApi;
