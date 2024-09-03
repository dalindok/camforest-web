import { TbLanguage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { HomeImages } from "../../utils/images";

function TapBar() {
  const navigation = useNavigate();
  const onNavigateHome = () => {
    navigation("/", { replace: true });
  };
  const onNavigateAbout = () => {
    navigation("/about", { replace: true });
  };
  const onNavigateType = () => {
    navigation("/type", { replace: true });
  };
  return (
    <div className="justify-between flex flex-row seld-center p-5 sticky top-0 z-10 bg-slate-100">
      <img
        src={HomeImages.logo}
        alt="logo page"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex space-x-8 font-bold">
        <button onClick={onNavigateHome} className="">
          Home
        </button>
        <button onClick={onNavigateType} className="">
          Type
        </button>
        <button onClick={onNavigateAbout} className="">
          About Us
        </button>
      </div>
      <TbLanguage className="w-8 h-8" />
    </div>
  );
}

export default TapBar;
