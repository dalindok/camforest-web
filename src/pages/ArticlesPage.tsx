import Article from "../components/tree/Article";
import Search from "../components/tree/Search";
import TapBar from "../components/home_page/TapBar";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getCategoriesDetail } from "../services/categories.service";
import { getArticles } from "../services/articles.service";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

const ArticlesPage = () => {
  const param = useParams();
  const { data: categoryData, loading: loadingCategory } = useRequest(() =>
    getCategoriesDetail(String(param.id))
  );
  const { data: articlesData, loading: loadingArticles } = useRequest(() =>
    getArticles(1, Number(param.id))
  );
  if (loadingCategory || loadingArticles) {
    return <Loading />;
  }
  return (
    <div>
      <TapBar />
      {categoryData?.data && <Search data={categoryData.data} />}
      {articlesData?.data ? <Article data={articlesData.data} /> : <NoData />}
    </div>
  );
};

export default ArticlesPage;
