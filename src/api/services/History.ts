import axios from "axios";
import { API_CONSTANTS } from "../constants";

const getHistoryAPI = async (
  deviceId: string,
  sub_dev: number,
  device_activity: boolean,
  startDate: any,
  stopDate: any,
  sampling_time: number
) => {
  const token = localStorage.getItem("token");

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
      Number(startDate.getMonth()) + 1
    }-${startDate.getDate()} 00:00`;

    EndTime = `${stopDate.getFullYear()}-${
      Number(stopDate.getMonth()) + 1
    }-${stopDate.getDate()} 00:00`;
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
    let responseJson = await axios.get(
      `${API_CONSTANTS.HISTORY_URL}?RequestId=12345&starttime=${StartTime}&endtime=${EndTime}&device_id=${deviceId}&type=electric&subdevice_idx=${sub_dev}&device_activity=${device_activity}&sample_min=${sampling_time}`,
      headers
    );
    return responseJson;
  } catch (error) {
    console.error("[Services] GET History Error:");
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
};

export const historyApi = {
  getHistoryAPI,
};
