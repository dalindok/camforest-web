interface AboutUs {
  data: IAboutUs.Banner;
}

const Aboutus = (props: AboutUs) => {
  return (
    <div className="w-screen h-screen flex flex-row pb-10 pt-3">
      <div
        className="w-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${props.data.imageUrl})` }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mt-2">
            {props.data.title}
          </h1>
          <p className="text-2xl text-white mt-8">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
