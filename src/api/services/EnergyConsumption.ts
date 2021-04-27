import axios from "axios";
import { API_CONSTANTS } from "../constants";

const getEnergyConsumptionAPI = async (
  startDate: any,
  stopDate: any,
  sampling_time: number
) => {
  const token = localStorage.getItem("token");
  const dashboard = "dashboard";
  const place = "PMCU";

  const dateTime = new Date();

  const day = Number(dateTime.getDate());
  const month = Number(dateTime.getMonth()) + 1;
  const year = dateTime.getFullYear();
  //const StartTime = `${year}-${month}-${day} 00:00`;

  let StartTime = null;
  let EndTime = null;

  if (startDate && stopDate) {
    console.log("start Date, stop Date");
    StartTime = `${startDate.getFullYear()}-${
      Number(startDate.getMonth() + 1) < 10
        ? "0" + String(startDate.getMonth() + 1)
        : String(startDate.getMonth() + 1)
    }-${startDate.getDate()} 00:00`;

    // EndTime = `${stopDate.getFullYear()}-${
    //   Number(stopDate.getMonth())
    //   }-${stopDate.getDate()} 00:00`;
    EndTime = `${stopDate.getFullYear()}-${
      Number(startDate.getMonth() + 1) < 10
        ? "0" + String(startDate.getMonth() + 1)
        : String(startDate.getMonth() + 1)
    }-${stopDate.getDate()} ${
      dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()
    }:${
      dateTime.getMinutes() < 10
        ? "0" + dateTime.getMinutes()
        : dateTime.getMinutes()
    }`;
  } else {
    console.log("out of start Date, stop Date");
    StartTime = `${year}-${month}-${day} 00:00`;
    EndTime = `${year}-${month}-${day} ${
      dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()
    }:${
      dateTime.getMinutes() < 10
        ? "0" + dateTime.getMinutes()
        : dateTime.getMinutes()
    }`;
  }

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
  };

  try {
    console.log(token);
    console.log(
      `${API_CONSTANTS.ENERGY_CONSUMPTION_URL}?RequestId=123&type=${dashboard}&place=${place}&building&floor&starttime=${StartTime}&endtime=${EndTime}&sample_min=${sampling_time}`
    );
    let responseJson = await axios.get(
      `${API_CONSTANTS.ENERGY_CONSUMPTION_URL}?RequestId=123&type=${dashboard}&place=${place}&building&floor&starttime=${StartTime}&endtime=${EndTime}&sample_min=${sampling_time}`,
      headers
    );
    return responseJson;
  } catch (error) {
    console.error("[Services] GET Dashboard Error:");
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
};

export const energyConsumptionApi = {
  getEnergyConsumptionAPI,
};
