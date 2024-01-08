import { apiInstance } from "../middleware"

export const getAllBlogs=(debt_or_credit=0)=>{
    let params ={};
    params.debt_or_credit=debt_or_credit;
    const api = apiInstance();
    return api.get('api/blog/get-all',{params})
}