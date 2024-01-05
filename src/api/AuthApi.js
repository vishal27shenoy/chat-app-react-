import axios from "axios";

export const signin = async (data) => {
  console.log(process.env.REACT_APP_BASE_URL);
  return axios.put(`${process.env.REACT_APP_BASE_URL}/user`, data, {
    withCredentials: true,
  });
};

export const signup = async (data) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/user`, data, {
    withCredentials: true,
  });
};
