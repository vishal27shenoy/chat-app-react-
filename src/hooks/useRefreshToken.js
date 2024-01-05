import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../contextapi/Context";
import { jwtDecode } from "jwt-decode";
const useRefreshToken = () => {
  const { setAuth, auth } = useContext(AppContext);

  const refresh = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/refresh`,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    const decoded = jwtDecode(response.data.accessToken);
    setAuth({ ...decoded, accessToken: response.data.accessToken });

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
