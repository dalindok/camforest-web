import Detail from "../components/Detail";
import { HomeImages } from "../utils/images";
function ArticlesPage() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="w-1/2">
        <img
          src={HomeImages.cheungChap}
          alt="CheungChap"
          className=" h-screen w-full p-5"
        />
      </div>
      <Detail />
    </div>
  );
}

export default ArticlesPage;
