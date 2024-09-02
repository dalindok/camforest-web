import { HomeImages } from "../../utils/images";

const ArticleData = [
  {
    id: 1,
    image: HomeImages.cheungChap,
    title: "Title 1",
    content:
      "Our informative and interactive platform offers a unique learning experience for nature lovers of all ages. Join us in exploring, understanding, and conserving the world’s forests.",
  },
  {
    id: 2,
    image: HomeImages.cheungChap,
    title: "Title 2",
    content:
      "Our informative and interactive platform offers a unique learning experience for nature lovers of all ages. Join us in exploring, understanding, and conserving the world’s forests.",
  },
  {
    id: 3,
    image: HomeImages.cheungChap,
    title: "Title 3",
    content:
      "Our informative and interactive platform offers a unique learning experience for nature lovers of all ages. Join us in exploring, understanding, and conserving the world’s forests.",
  },
];
function Article() {
  return (
    <div className="text-center self-center">
      <p className="font-bold  text-3xl mt-10 underline underline-offset-8">
        Lastest Article
      </p>
      <div className="flex flex-row m-10">
        {ArticleData.map((item, index) => {
          return (
            <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white ">
              <img
                src={item.image}
                alt="Cheung Chab"
                className="w-full h-auto rounded-lg "
              />
              <p className="font-bold pt-2">{item.title}</p>
              <p className="p-3">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Article;
