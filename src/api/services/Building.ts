import axios from "axios";
import { API_CONSTANTS } from "../constants";

const getBuildingAPI = async () => {
  const token = localStorage.getItem("token");
  const headers = {
    // url: `${API_CONSTANTS.BUILDING_URL}`,
    // method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  };

  try {
    let responseJson = await axios.get(`${API_CONSTANTS.BUILDING_URL}`, headers);
    return responseJson;
  } catch (error) {
    console.error("[Services] GET Building Error:");
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
};

export const building = {
  getBuildingAPI,
};
