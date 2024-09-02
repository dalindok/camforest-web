// import { useNavigate } from "react-router-dom";
import { TreeImages } from "../../utils/images";
const ArticleData = [
  {
    id: 1,
    title: "Cheung Chap - The World's Most Beautiful Tree",
    content:
      "Cheung Chap is a tall, woody plant native to Indonesia, particularly in the region of West Java. It is a tall, woody plant with a spiny, stalk-like stem, leaves, and a dense, spiny stem. The plant has a unique and beautiful appearance, with its reddish-brown or white flower often in a tall, narrow, or leaf-like form. It has a short stem, leaves, and often a dense, spiny stem. Cheung Chap is a popular choice for ornamental plants and is also known for its unique habitat, which includes various types of trees, shrubs, and flowers. Cheung Chap has a rich history and has been around for thousands of years, with various cultures and people contributing to its survival",
  },
  {
    id: 2,
    title: "Indonesia's First Ever Tree Flowering",
    content:
      "Indonesia's first ever tree flowering was observed in the region of West Java in 1975. The tree was found to be a Cheung Chap, a tall, woody plant native to Indonesia. The plant was attracted to pollinators, and a flower bloom was observed. The flower was a bright, reddish-brown or white flower, often in a tall, narrow, or leaf-like form. The plant has a short stem, leaves, and often a dense, spiny stem. The flower was a rare and beautiful bloom, and it had a unique and beautiful appearance. The flower was awarded the Nobel Prize in Botany in 1995 for its discovery and the subsequent conservation efforts. Indonesia's first ever tree ",
  },
  {
    id: 3,
    title: "Indonesia's First Ever Tree Flowering",
    content:
      "Indonesia's first ever tree flowering was observed in the region of West Java in 1975. The tree was found to be a Cheung Chap, a tall, woody plant native to Indonesia. The plant was attracted to pollinators, and a flower bloom was observed. The flower was a bright, reddish-brown or white flower, often in a tall, narrow, or leaf-like form. The plant has a short stem, leaves, and often a dense, spiny stem. The flower was a rare and beautiful bloom, and it had a unique and beautiful appearance. The flower was awarded the Nobel Prize in Botany in 1995 for its discovery and the subsequent conservation efforts. Indonesia's first ever tree ",
  },
  {
    id: 4,
    title: "Indonesia's First Ever Tree Flowering",
    content:
      "Indonesia's first ever tree flowering was observed in the region of West Java in 1975. The tree was found to be a Cheung Chap, a tall, woody plant native to Indonesia. The plant was attracted to pollinators, and a flower bloom was observed. The flower was a bright, reddish-brown or white flower, often in a tall, narrow, or leaf-like form. The plant has a short stem, leaves, and often a dense, spiny stem. The flower was a rare and beautiful bloom, and it had a unique and beautiful appearance. The flower was awarded the Nobel Prize in Botany in 1995 for its discovery and the subsequent conservation efforts. Indonesia's first ever tree ",
  },
  {
    id: 5,
    title: "Indonesia's First Ever Tree Flowering",
    content:
      "Indonesia's first ever tree flowering was observed in the region of West Java in 1975. The tree was found to be a Cheung Chap, a tall, woody plant native to Indonesia. The plant was attracted to pollinators, and a flower bloom was observed. The flower was a bright, reddish-brown or white flower, often in a tall, narrow, or leaf-like form. The plant has a short stem, leaves, and often a dense, spiny stem. The flower was a rare and beautiful bloom, and it had a unique and beautiful appearance. The flower was awarded the Nobel Prize in Botany in 1995 for its discovery and the subsequent conservation efforts. Indonesia's first ever tree ",
  },
];
function Article() {
  // const navigation = useNavigate();
  // const onNavigateArticleDetail = () => {
  //   // navigation("/type/tree");
  // };
  return (
    <div className="m-10">
      <p className="underline underline-offset-8 font-bold text-center mb-10">
        Articles
      </p>
      <div className="grid grid-cols-3 grid-flow-row gap-y-10 place-items-center">
        {ArticleData.map((item, index) => {
          return (
            <div className="rounded-lg shadow shadow-slate-300 w-80 h-96 overflow-hidden">
              <img
                src={TreeImages.cheungChap}
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
                  {item.content}
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
