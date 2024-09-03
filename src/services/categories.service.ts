import { ROUTE_API } from "../api/api";
import HttpUtil from "../utils/http-util";

export const getCategories = async () => {
  const res = await HttpUtil.get<ICategories.ICategoriesData>(
    ROUTE_API.categories
  );
  return res.data;
};
export const getCategoriesDetail = async (id: string) => {
  const res = await HttpUtil.get<ICategories.ICategoriesDetailData>(
    ROUTE_API.categoriesDetail.replace(":id", id.toString())
  );
  return res.data;
};
