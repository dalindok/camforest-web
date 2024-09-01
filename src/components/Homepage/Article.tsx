import Cheung_Chab from "../assets/Cheung Chap.jpg";

function Article() {
  return (
    <div className="text-center self-center">
      <p className="font-bold  text-3xl mt-20 underline underline-offset-8">
        Lastest Article
      </p>
      <div className="flex flex-row m-10">
        <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white ">
          <img
            src={Cheung_Chab}
            alt="Cheung Chab"
            className="w-full h-auto rounded-lg "
          />
          <p className="font-bold">Title 1</p>
          <p>Description 1</p>
        </div>
        <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white">
          <img
            src={Cheung_Chab}
            alt="Cheung Chab"
            className="w-full h-auto rounded-lg"
          />
          <p className="font-bold">Title 2</p>
          <p>Description 2</p>
        </div>
        <div className="flex flex-col shadow shadow-slate-300 m-10 rounded-lg bg-white">
          <img
            src={Cheung_Chab}
            alt="Cheung Chab"
            className="w-full h-auto rounded-lg"
          />
          <p className="font-bold">Title 3</p>
          <p>Description 3</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
