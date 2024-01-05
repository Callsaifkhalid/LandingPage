import { apiInstance } from "../middleware";

export const checkRates = (data) => {
  const api = apiInstance();
  return api.post("api/user/post", data);
};
