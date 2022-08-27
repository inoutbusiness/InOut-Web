import axios from "axios"

//---------------------------
// development environment  |
//---------------------------

const URL = {
  Matheus: "https://localhost:7221",
  Arthur: "https://localhost:53120",
  Guilherme: ""
}

const BASE_URL = URL.Matheus // <--------

// Dá para separar ainda mais para ficar ainda mais organizado!
export const ENDPOINTS = {
  signIn: "auth/signin",
  signUp: "auth/signup",
  sendResetPasswordCode: "forgotPassword/sendResetPasswordCode",
  emailCodeChecker: "forgotPassword/emailCodeChecker",
  resetPassword: "forgotPassword/resetPassword",
  getAccountIdByEmail: "helper/getAccountIdByEmail"
}

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "/api/v1/" + endpoint;

  return {
      getAll: () => axios.get(url),
      getBy: data => axios.get(url + data),
      post: newRecord => axios.post(url, newRecord, { headers: { "Content-Type": "application/json" }}),
      put: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: id => axios.delete(url + id)
  }
}