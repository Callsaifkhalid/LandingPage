export const getCategoryBlogs = (blog_category, debt_or_credit = 0) => {
    let params = {};
    params.debt_or_credit = debt_or_credit;
    if (blog_category) params.blog_category = blog_category;
    const api = apiInstance();
    return api.get("api/blog/get-all", { params });
  };