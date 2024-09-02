import { useNavigate } from "react-router-dom";
import { PageTypeImages } from "../../utils/images";
function TypeOfTree() {
  const navigation = useNavigate();
  const onNavigateTree = () => {
    navigation("/type/tree");
  };
  return (
    <div>
      <div
        onClick={onNavigateTree}
        className="flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300 cursor-pointer">
        <img
          src={PageTypeImages.cheungChap}
          alt="Tree"
          className="w-80 h-auto rounded-lg"
        />
        <div className="flex flex-col ml-auto pl-48">
          <p className="font-bold text-center text-3xl">Flower</p>
          <p className="text-xl mt-14 font-light">
            Plant's reproductive structure, featuring petals, stamens, and
            pistils, essential for seed production and attracting pollinators.
          </p>
        </div>
      </div>
      <div
        onClick={onNavigateTree}
        className="flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300 cursor-pointer">
        <img
          src={PageTypeImages.cheungChap}
          alt="Tree"
          className="w-80 h-auto rounded-lg"
        />
        <div className="flex flex-col ml-auto pl-48">
          <p className="font-bold text-center text-3xl">Ivy</p>
          <p className="text-xl mt-14 font-light">
            An evergreen climbing plant with lobed leaves, commonly found
            growing on trees and forest floors.
          </p>
        </div>
      </div>
      <div
        onClick={onNavigateTree}
        className="flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300 cursor-pointer">
        <img
          src={PageTypeImages.cheungChap}
          alt="Tree"
          className="w-80 h-auto rounded-lg"
        />
        <div className="flex flex-col ml-auto pl-48">
          <p className="font-bold text-center text-3xl">Tree</p>
          <p className="text-xl mt-14 font-light">
            A tree is a tall, woody plant with a trunk, branches, and leaves,
            essential for oxygen and habitats in ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypeOfTree;
