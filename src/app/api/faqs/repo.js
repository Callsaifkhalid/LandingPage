import { apiInstance } from "../middleware";

export const getAllFaqs = (debt_or_credit = 1) => {
  let params = {};
  params.debt_or_credit = debt_or_credit;
  const api = apiInstance();
  return api.get("api/faq/get-all", { params });
};
