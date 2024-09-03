interface Mission {
  data: IAboutUs.OurMission[];
}

function Mission(props: Mission) {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto h-full flex flex-col justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-left">
            <h2 className="text-5xl font-bold">{props.data[0].title}</h2>
            <p className="text-2xl mt-4 max-w-md">
              {props.data[0].description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pr-4">
            <img
              src={props.data[0].imageUrl}
              alt="Tree 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src={props.data[1].imageUrl}
              alt="Tree 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src={props.data[2].imageUrl}
              alt="Tree 3"
              className="col-span-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
