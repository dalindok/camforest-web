import { ROUTE_API } from "../api/api";
import HttpUtil from "../utils/http-util";

export const getHome = async () => {
  const res = await HttpUtil.get<IHome.IHomeData>(ROUTE_API.home);
  return res.data;
};
