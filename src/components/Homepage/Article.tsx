import Cheung_Chab from "../../assets/pageHomepage/Cheung Chap.jpg";

function Article() {
  return (
    <div className="text-center self-center">
      <p className="font-bold  text-3xl mt-10 underline underline-offset-8">
        Lastest Article
      </p>
      <div className="flex flex-row m-10">
        <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white ">
          <img
            src={Cheung_Chab}
            alt="Cheung Chab"
            className="w-full h-auto rounded-lg "
          />
          <p className="font-bold pt-2">Title 1</p>
          <p className="p-3">
            Our informative and interactive platform offers a unique learning
            experience for nature lovers of all ages. Join us in exploring,
            understanding, and conserving the world’s forests.
          </p>
        </div>
        <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white">
          <img
            src={Cheung_Chab}
            alt="Cheung Chab"
            className="w-full h-auto rounded-lg"
          />
          <p className="font-bold pt-2">Title 2</p>
          <p className="p-3">
            Our informative and interactive platform offers a unique learning
            experience for nature lovers of all ages. Join us in exploring,
            understanding, and conserving the world’s forests.
          </p>
        </div>
        <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white">
          <img
            src={Cheung_Chab}
            alt="Cheung Chab"
            className="w-full h-auto rounded-lg"
          />
          <p className="font-bold pt-2">Title 3</p>
          <p className="p-3">
            Our informative and interactive platform offers a unique learning
            experience for nature lovers of all ages. Join us in exploring,
            understanding, and conserving the world’s forests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article;
