import useActiveRoute from "../../hooks/useActiveRoute";
import { useNavigate } from "react-router-dom";
import { HomeImages } from "../../utils/images";
import LanguageModal from "../LanguageModal";
import { useTranslation } from "react-i18next";

function TapBar() {
  const { t } = useTranslation();
  const activeRoute = useActiveRoute();
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
        <button
          onClick={onNavigateHome}
          className={`${
            activeRoute == "" ? "text-black transition-all" : "text-slate-400"
          }`}>
          {t("home")}
        </button>
        <button
          onClick={onNavigateType}
          className={`${
            activeRoute == "type"
              ? "text-black transition-all"
              : "text-slate-400"
          }`}>
          {t("type")}
        </button>
        <button
          onClick={onNavigateAbout}
          className={`${
            activeRoute == "about"
              ? "text-black transition-all"
              : "text-slate-400"
          }`}>
          {t("about_us")}
        </button>
      </div>
      <LanguageModal />
    </div>
  );
}

export default TapBar;
