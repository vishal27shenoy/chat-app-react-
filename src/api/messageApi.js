import axios from "axios";
export const getMessage = (senderId, receiverId, token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  return axios.get(
    `${process.env.REACT_APP_BASE_URL}/message?senderId=${senderId}&receiverId=${receiverId}`
  );
};
