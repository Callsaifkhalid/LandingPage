import { apiInstance } from "../middleware";

export const ytelCallBack = (data) => {
  const api = apiInstance();
  return api.post("api/user/post", data);
};
