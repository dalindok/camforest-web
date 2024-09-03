import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { useRequest } from "ahooks";
import { getArticleDetails } from "../services/articles.service";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
function ArticlesPage() {
  const param = useParams();
  const { data: articleData, loading } = useRequest(() =>
    getArticleDetails(Number(param.id))
  );
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {loading ? (
        <Loading />
      ) : (
        articleData?.data && (
          <div className="w-full sm:w-1/2 p-5">
            <img
              src={articleData.data.gallery[0].image_url}
              alt="CheungChap"
              className="w-full rounded-lg"
            />
          </div>
        )
      )}
      {articleData?.data ? <Detail data={articleData.data} /> : <NoData />}
    </div>
  );
}

export default ArticlesPage;
