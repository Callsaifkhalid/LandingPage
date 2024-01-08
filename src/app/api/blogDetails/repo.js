import { apiInstance } from "../middleware"

export const getBlogDetails=(id)=>{
    let params ={};
    if(id)
    params.id=id;
    const api = apiInstance();
    return api.get('api/blog/get',{params})
}