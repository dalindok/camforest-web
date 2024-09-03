import { useNavigate } from "react-router-dom";
import { useBreakpoint } from "../../hooks/layout";
interface ITypeOfTree {
  data: ICategories.CategoriesData[];
}
const TypeOfTree = (props: ITypeOfTree) => {
  const breakpoint = useBreakpoint();
  const navigation = useNavigate();
  const onNavigateTree = (id: number) => {
    navigation(`/article/${id}`);
  };
  return (
    <div className="p-5">
      {props.data.map((item, index) => {
        return (
          <div
            onClick={() => onNavigateTree(item.id)}
            className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-ml p-5 mb-10 rounded-lg shadow shadow-slate-300 cursor-pointer">
            <img
              src={item.imageUrl}
              alt="Tree"
              className="w-full sm:w-80 h-auto rounded-lg"
            />
            <div className="flex flex-col sm:px-5 pt-5 sm:pt-0">
              <p className="font-bold text-3xl">{item.name}</p>
              <p className="text-xl mt-3 font-light">
                {breakpoint !== "sm"
                  ? item.description
                  : item.description.length > 95
                  ? item.description.substring(0, 95) + "..."
                  : item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TypeOfTree;
