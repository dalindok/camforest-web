interface IWhyUs {
  data: IHome.WhyUs;
}
const WhyUs = (props: IWhyUs) => {
  return (
    <div className="flex flex-col md:flex-row p-10 bg-white">
      <img
        src={props.data.imageUrl}
        alt="righ side of Why us"
        className="w-full md:w-1/2 h-1/2 rounded-lg"
      />
      <div className="text-center md:p-20">
        <p className="font-bold text-4xl p-4 pb-7">{props.data.title}</p>
        <p className="text-xl text-left">{props.data.description}</p>
      </div>
    </div>
  );
};

export default WhyUs;
