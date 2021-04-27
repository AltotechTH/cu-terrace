const STOCK_URL =
  "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=50&aggregate=3&e=Kraken";

var endpoint = "http://localhost:8080";

if (process.env.REACT_APP_ENPORT_URL) {
  endpoint = process.env.REACT_APP_ENPORT_URL;
}

const API_CONSTANTS = {
  //##----------Building API------------
  BUILDING_URL: endpoint + "/api/v2.0/buildings/",
  HISTORY_URL: endpoint + "/api/v2.0/historydevice",
  DEVICE_URL: endpoint + "/api/v2.0/devices",
  ENERGY_CONSUMPTION_URL: endpoint + "/api/v2.0/energy_comsumption",
  ENERGY_TIPS_URL: endpoint + "/api/v2.0/energy_tips",
  INVOICES_URL: endpoint + "/api/v2.0/invoices",
};

export { API_CONSTANTS, STOCK_URL };
