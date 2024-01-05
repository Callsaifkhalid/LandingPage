import { BASE_URL } from "@/utils/constantVariables";
import axios from "axios";

export const apiInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
