import axios from "axios";
export const getContact = (id, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}/user/contacts?userId=${id}`
  );
};

export const getGroup = (id, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return axios.get(`${process.env.REACT_APP_BASE_URL}/user/group?userId=${id}`);
};

export const getNotification = (id, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}/user/requests?userId=${id}`
  );
};

export const searchUser = (value, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return axios.get(`${process.env.REACT_APP_BASE_URL}/user?search=${value}`);
};
