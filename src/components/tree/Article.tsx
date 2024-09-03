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
    <div className="m-10">
      <p className="underline underline-offset-8 font-bold text-center mb-10">
        Articles
      </p>
      <div className="grid grid-cols-3 grid-flow-row gap-y-10 place-items-center">
        {props.data.map((item, index) => {
          return (
            <div
              onClick={() => onNavigateArticleDetail(item.id)}
              className="rounded-lg shadow shadow-slate-300 w-80 h-96 overflow-hidden">
              <img
                src={item.gallery[0].image_url}
                alt="Type of tree"
                className="rounded-lg"
              />
              <div className="p-3">
                <p
                  className="font-bold text-center"
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 1, // Number of lines before truncation
                    WebkitBoxOrient: "vertical", // Required for -webkit-line-clamp to work
                  }}>
                  {item.title}
                </p>
                <p
                  className="font-light text-center"
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 4, // Number of lines before truncation
                    WebkitBoxOrient: "vertical", // Required for -webkit-line-clamp to work
                  }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Article;
