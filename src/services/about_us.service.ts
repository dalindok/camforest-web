import { ROUTE_API } from "../api/api";
import HttpUtil from "../utils/http-util";

export const getAboutUs = async () => {
  const res = await HttpUtil.get<IAboutUs.IAdboutUsData>(ROUTE_API.aboutUs);
  return res.data;
};
