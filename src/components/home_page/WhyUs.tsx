import { HomeImages } from "../../utils/images";
interface IWhyUs {
  data: IHome.WhyUs;
}
const WhyUs = (props: IWhyUs) => {
  return (
    <div className="flex flex-row mt-10 bg-white">
      <img
        src={props.data.imageUrl}
        alt="righ side of Why us"
        className="w-1/2 h-1/2 p-2"
      />
      <div className="text-center p-20">
        <p className="font-bold text-4xl p-4 pb-7">{props.data.title}</p>
        <p className="text-xl">{props.data.description}</p>
      </div>
    </div>
  );
};

export default WhyUs;
