import { client } from "./http";

export const productsApi = {
    getAllProducts: (page = 1) => {return client.get(`/search/program/${page}`)},
    getNewProducts: () => {return client.get("/new")},
    getProductInfo: (isbn13:string) => {return client.get(`/books/${isbn13}`)},
    searchProduct: (search:any) => {return client.get(`/search/${search}`)},
};