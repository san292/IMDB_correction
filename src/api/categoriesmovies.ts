import { TopRatedAPI } from "../interface/api";

export const categoriesApi = async (API_URL:string):Promise<TopRatedAPI | undefined>=> {
  try {
    const response = await fetch(API_URL).then((res) => res.json());
    return response.data;
  } catch (error) {
    console.log("Error fetch API categories", error);
    return error?.response.data
  }
};
