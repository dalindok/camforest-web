import { useNavigate } from "react-router-dom";
interface ITypeOfTree {
  data: ICategories.CategoriesData[];
}
const TypeOfTree = (props: ITypeOfTree) => {
  const navigation = useNavigate();
  const onNavigateTree = (id: number) => {
    navigation(`/article/${id}`);
  };
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div
            onClick={() => onNavigateTree(item.id)}
            className="flex flex-row bg-white shadow-ml p-10 m-10 rounded-lg shadow shadow-slate-300 cursor-pointer">
            <img
              src={item.imageUrl}
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
};

export default TypeOfTree;
