interface DatailArticle {
  data: IArticleDetail.Data;
}
function Detail(props: DatailArticle) {
  return (
    <div className="flex flex-col w-full sm:w-1/2 sm:pr-4 sm:pt-10">
      <p className="text-3xl sm:text-4xl font-bold pb-3 sm:pb-5 text-center text-gray-800">
        {props.data.title}
      </p>
      <div className="text-xl px-5 text-gray-700 space-y-">
        <div className="flex">
          <p className="font-semibold w-32 sm:w-44">Category</p>
          <p>: {props.data.category.name}</p>
        </div>
        {props.data.existIn && (
          <div className="flex">
            <p className="font-semibold w-32 sm:w-44 ">Exist In</p>
            <p>: {props.data.existIn}</p>
          </div>
        )}
        {props.data.advantage && (
          <div className="flex">
            <p className="font-semibold w-32 sm:w-44 ">Advantage</p>
            <p className="w-2/3 sm:w-4/5">: {props.data.advantage}</p>
          </div>
        )}
        {props.data.disadvantage && (
          <div className="flex">
            <p className="font-semibold w-32 sm:w-44 ">Disadvantage</p>
            <p className="w-2/3 sm:w-4/5">: {props.data.disadvantage}</p>
          </div>
        )}
        {props.data.size && (
          <div className="flex">
            <p className="font-semibold w-32 sm:w-44 ">Size</p>
            <p>: {props.data.size}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
