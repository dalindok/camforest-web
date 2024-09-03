import { useNavigate } from "react-router-dom";
interface Article {
  data: IArticle.ArticleData[];
}
function Article(props: Article) {
  const navigation = useNavigate();
  const onNavigateArticleDetail = (id: number) => {
    navigation(`/article-detail/${id}`);
  };
  return (
    <div className="p-5">
      <p className="underline text-2xl underline-offset-8 font-bold text-center mb-10">
        Articles
      </p>
      <div className="grid grid-flow-col-1 sm:grid-cols-3 grid-flow-row gap-y-10 place-content-center sm:place-content-start">
        {props.data.map((item, index) => {
          return (
            <div
              onClick={() => onNavigateArticleDetail(item.id)}
              className="flex flex-col shadow shadow-slate-300 rounded-lg bg-white w-80 h-auto overflow-hidden cursor-pointer">
              <img
                src={item.gallery[0].image_url}
                alt="Cheung Chab"
                className="rounded-lg w-96 h-72"
              />
              <p className="font-bold pt-2 text-lg text-center">
                {item.title.length > 20
                  ? item.title.substring(0, 20) + "..."
                  : item.title}
              </p>
              <p className="p-3 text-left">
                {item.description.length > 100
                  ? item.description.substring(0, 100) + "..."
                  : item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Article;
