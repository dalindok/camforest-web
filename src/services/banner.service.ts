import { ROUTE_API } from "../api/api";
import { BannerType } from "../constants/constants";
import HttpUtil from "../utils/http-util";

export const getBanner = async () => {
  const res = await HttpUtil.get<IBanner.IBannerData>(ROUTE_API.banner, {
    params: {
      type: BannerType.TREE,
    },
  });
  return res.data;
};
