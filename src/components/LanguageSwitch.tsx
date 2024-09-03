import { useTranslation } from "react-i18next";
import { FlagImages } from "../utils/images";

interface ILanguageSwitcher {
  closeModal: () => void;
}

const LanguageSwitcher = (props: ILanguageSwitcher) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Store the selected language in local storage
    props.closeModal(); // Close the modal when a language is selected
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={() => changeLanguage("en")}
        className={`${
          currentLanguage === "en" ? "bg-slate-300" : ""
        } rounded-sm py-1 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-300`}>
        <img
          src={FlagImages.en}
          alt="En Flag"
          className="w-5 h-5 rounded-full"
        />
        <p>{t("english")}</p>
      </div>
      <div
        onClick={() => changeLanguage("km")}
        className={`${
          currentLanguage === "km" ? "bg-slate-300" : ""
        } rounded-sm py-1 flex items-center justify-center gap-3 cursor-pointer hover:bg-slate-300`}>
        <img
          src={FlagImages.km}
          alt="En Flag"
          className="w-5 h-5 rounded-full"
        />
        <p>{t("khmer")}</p>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
