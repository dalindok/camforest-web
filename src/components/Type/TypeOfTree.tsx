import { useNavigate } from "react-router-dom";
import { PageTypeImages } from "../../utils/images";
const TypeData = [
  {
    id: 1,
    name: "Flower",
    image: PageTypeImages.cheungChap,
    description:
      "Plant's reproductive structure, featuring petals, stamens, and pistils, essential for seed production and attracting pollinators.",
  },
  {
    id: 2,
    name: "Ivy",
    image: PageTypeImages.cheungChap,
    description:
      "Ivy is a herbaceous plant with a reddish-brown or white flower, often in a tall, narrow, or leaf-like form. It has a short stem, leaves, and often a dense, spiny stem.",
  },
  {
    id: 3,
    name: "Raksa",
    image: PageTypeImages.cheungChap,
    description:
      "Raksa is a plant native to Indonesia, particularly in the region of West Java. It is a tall, woody plant with a spiny, stalk-like stem, leaves, and a dense, spiny stem.",
  },
];
function TypeOfTree() {
  const navigation = useNavigate();
  const onNavigateTree = () => {
    navigation("/type/tree");
  };
  return (
    <div>
      {TypeData.map((item, index) => {
        return (
          <div
            onClick={onNavigateTree}
            className="flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300 cursor-pointer">
            <img
              src={item.image}
              alt="Tree"
              className="w-80 h-auto rounded-lg"
            />
            <div className="flex flex-col ml-auto pl-48">
              <p className="font-bold text-center text-3xl">{item.name}</p>
              <p className="text-xl mt-14 font-light">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TypeOfTree;
