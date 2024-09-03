import React, { useEffect, useState } from "react";
import { TbLanguage } from "react-icons/tb";
import LanguageSwitcher from "./LanguageSwitch";
import { useTranslation } from "react-i18next";

const LanguageModal = () => {
  //hook
  const { t } = useTranslation();
  //state
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Disable scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the overflow-hidden class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <TbLanguage onClick={toggleModal} className="w-8 h-8 cursor-pointer" />
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {t("slectLanguage")}
            </h2>
            <LanguageSwitcher closeModal={toggleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageModal;
