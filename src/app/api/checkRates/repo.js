import axios from "axios";


export async function checkRates(data) {
    let route = "https://gateway-clear-debt-credit.dsmeglobal.com/".concat("api/user/post");
    console.log(data);
    return axios.post(route, data, {
      ["axios-retry"]: {
        retries: 0,
      },
    });
  }