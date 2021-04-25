import axios from "axios";
import { API_CONSTANTS } from "../constants";

const getDeviceAPI = async (room: string) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  };

  try {
    let responseJson = await axios.get(
      `${API_CONSTANTS.DEVICE_URL}?room=${room}&building=CU%20iHouse`,
      headers
    );
    return responseJson;
  } catch (error) {
    console.error("[Services] GET Devices Error:");
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
};

export const deviceApi = {
  getDeviceAPI,
};
