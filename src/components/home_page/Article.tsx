interface IArticle {
  data: IHome.Article[];
}
const Article = (props: IArticle) => {
  return (
    <div className="text-center self-center">
      <p className="font-bold  text-3xl mt-10 underline underline-offset-8">
        Lastest Article
      </p>
      <div className="flex flex-row m-10">
        {props.data.map((item, index) => {
          return (
            <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white ">
              <img
                src={item.gallery[0].image_url}
                alt="Cheung Chab"
                className="w-full h-auto rounded-lg "
              />
              <p className="font-bold pt-2">{item.title}</p>
              <p className="p-3">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
