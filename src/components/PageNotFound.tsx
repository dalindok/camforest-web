import Lottie from "react-lottie";
import * as loading from "../assets/jsons/not_found_404.json"; //

const PageNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie options={defaultOptions} height={200} width={200} />
      <h2>Page Not Found!</h2>
    </div>
  );
};

export default PageNotFound;
