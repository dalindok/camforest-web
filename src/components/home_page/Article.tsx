import { useNavigate } from "react-router-dom";

interface IArticle {
  data: IHome.Article[];
}
const Article = (props: IArticle) => {
  const navigation = useNavigate();
  const onNavigateArticleDetail = (id: number) => {
    navigation(`/article-detail/${id}`);
  };
  return (
    <div className="text-center">
      <p className="font-bold text-2xl sm:text-3xl mt-10 underline underline-offset-8">
        Lastest Article
      </p>
      <div className="flex flex-col sm:flex-row m-10 items-center justify-between">
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
              <p className="font-bold pt-2 text-lg">
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
};

export default Article;
