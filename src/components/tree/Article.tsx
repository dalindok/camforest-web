import { useNavigate } from "react-router-dom";
import { TreeImages } from "../../utils/images";
function Article() {
  const navigation = useNavigate();
  const onNavigateArticleDetail = () => {
    // navigation("/type/tree");
  };
  return (
    <div className="m-10">
      <p className="underline underline-offset-8 font-bold text-center">
        Articles
      </p>
      <div className="flex flex-row justify-between mt-10 m-10">
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className=" rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​ We will get back to you as soon
            as we can.
          </p>
        </div>
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className="rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​​ We will get back to you as soon
            as we can.
          </p>
        </div>
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className="rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​​ We will get back to you as soon
            as we can.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-10 m-10">
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className=" rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​ We will get back to you as soon
            as we can.
          </p>
        </div>
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className="rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​​ We will get back to you as soon
            as we can.
          </p>
        </div>
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className="rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​​ We will get back to you as soon
            as we can.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-10 m-10">
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className=" rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​ We will get back to you as soon
            as we can.
          </p>
        </div>
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className="rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​​ We will get back to you as soon
            as we can.
          </p>
        </div>
        <div className="rounded-lg shadow shadow-slate-300 w-80 h-96">
          <img
            src={TreeImages.cheungChap}
            alt="Type of tree"
            className="rounded-lg"
          />
          <p className="font-bold text-center">Cheung Chap</p>
          <p className="font-light text-center">
            Feel free to contact us any time.​​ We will get back to you as soon
            as we can.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
