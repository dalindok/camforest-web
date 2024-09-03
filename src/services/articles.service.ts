import { ROUTE_API } from "../api/api";
import HttpUtil from "../utils/http-util";

export const getArticles = async (page: number, categoryId: number) => {
  const res = await HttpUtil.get<IArticle.IArticleData>(
    ROUTE_API.articlesByCategory,
    {
      params: {
        page: page,
        categoryId: categoryId,
      },
    }
  );
  return res.data;
};
export const getArticleDetails = async (id: number) => {
  const res = await HttpUtil.get<IArticleDetail.IArticleDetailData>(
    ROUTE_API.articleDetail.replace(":id", id.toString())
  );
  return res.data;
};
