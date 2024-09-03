interface DatailArticle {
  data: IArticleDetail.Data;
}
function Detail(props: DatailArticle) {
  return (
    <div className="flex flex-col pr-40 pt-10 w-1/2 items-center">
      <p className="text-4xl py-5">{props.data.title}</p>
      <div className="text-xl">
        <p>Category: {props.data.category.name}</p>
        <p>Exist In: {props.data.existIn}</p>
        <p>Advantage: {props.data.advantage}</p>
        <p>Disadvantage: {props.data.disadvantage}</p>
        <p>Size: {props.data.size}</p>
      </div>
    </div>
  );
}

export default Detail;
