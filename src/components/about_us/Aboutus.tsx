interface AboutUs {
  data: IAboutUs.Banner;
}

const Aboutus = (props: AboutUs) => {
  return (
    <div className="w-full sm:h-screen flex flex-row px-5">
      <div
        className="w-screen flex flex-col items-center justify-center bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${props.data.imageUrl})` }}>
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mt-2">
            {props.data.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white my-3 sm:my-8 mx-5 sm:mx-36">
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
