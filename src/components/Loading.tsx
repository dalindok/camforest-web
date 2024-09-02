import Lottie from "react-lottie";
import * as loading from "../assets/jsons/loading.json"; // Replace with the actual path to your Lottie JSON file

const Loading = () => {
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
      <h2>Loading ...</h2>
    </div>
  );
};

export default Loading;
