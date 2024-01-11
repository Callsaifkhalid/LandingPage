import { apiInstance } from "../middleware";

export const getCategoryBlogs = (debt_or_credit = 0,) => {
  let params = { debt_or_credit: debt_or_credit };
  const api = apiInstance();
  return api.get('api/blog-category/get-all', { params });
  };