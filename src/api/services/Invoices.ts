import axios from 'axios';
import { API_CONSTANTS } from '../constants';

const getInvoiceAPI = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
  };

  try {
    let responseJson = await axios.get(`${API_CONSTANTS.INVOICES_URL}`, headers);
    return responseJson;
  } catch (error) {
    console.error('[Services] GET Invoices Error:');
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
};

const getInvoiceOfRoom = async ( room : any) => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `token ${token}`,
    },
  };

  try {
    let responseJson = await axios.get(
      `${API_CONSTANTS.INVOICES_URL}?RequestId=123&place=PMCU&building=CU%20iHouse&room=${room}`,
      headers
    );
    return responseJson;
  } catch (error) {
    console.error('[Services] GET Invoices Error:');
    console.error(error);

    var data = { requestError: error.message, response: error.response };
    return data;
  }
};

export const invoiceAPI = {
  getInvoiceAPI,
  getInvoiceOfRoom,
};
