import Lottie from "react-lottie";
import * as loading from "../assets/jsons/no_data.json"; // Replace with the actual path to your Lottie JSON file

const NoData = () => {
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
      <h2>No Data</h2>
    </div>
  );
};

export default NoData;
